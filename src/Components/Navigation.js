// src/components/Navigation.js
import React from 'react';
import { Box, Button, Stepper, Step, StepLabel } from '@mui/material';

const Navigation = ({ activeStep, steps, handleNext, handleBack, handleReset }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
        variant='contained'
          color="primary"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleReset}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navigation;
