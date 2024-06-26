import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';
import Navigation from './Navigation';
import { Container, Box, Typography } from '@mui/material';
import axios from 'axios';

const steps = ['Personal Information', 'Address Information', 'Confirmation'];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleNext = () => {
    if (validateForm()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    });
    localStorage.removeItem('formData');
  };

  const handleChange = (input) => async (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [input]: value });
    localStorage.setItem('formData', JSON.stringify({ ...formData, [input]: value }));

    if (input === 'zip' && value.length === 6) {
      try {
        const response = await axios.get(`https://thezipcodes.com/api/v1/search?zipCode=${value}&countryCode=IN&apiKey=d031f36a88ae6c19a11f925f3ef13f34`);
        if (response.data && response.data.location && response.data.location.length > 0) {
          const { city, state } = response.data.location[0];
          setFormData((prevData) => ({
            ...prevData,
            city,
            state
          }));
          localStorage.setItem('formData', JSON.stringify({
            ...formData,
            city,
            state
          }));
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (activeStep === 0) {
      if (!formData.name) tempErrors.name = 'Name is required';
      if (!formData.email) {
        tempErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = 'Email is invalid';
      }
      if (!formData.phone) tempErrors.phone = 'Phone is required';
    }
    if (activeStep === 1) {
      if (!formData.address1) tempErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) tempErrors.city = 'City is required';
      if (!formData.state) tempErrors.state = 'State is required';
      if (!formData.zip) tempErrors.zip = 'Zip Code is required';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />;
      case 1:
        return <AddressInfo formData={formData} handleChange={handleChange} errors={errors} />;
      case 2:
        return <Confirmation formData={formData} />;
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: '100%', mt: 4 }}>
        <Typography variant="h4" align="center">
          Multi-Step Form
        </Typography>
        {getStepContent(activeStep)}
        <Navigation
          activeStep={activeStep}
          steps={steps}
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      </Box>
    </Container>
  );
};

export default MultiStepForm;
