// src/components/AddressInfo.js
import React from 'react';
import { TextField, Box } from '@mui/material';

const AddressInfo = ({ formData, handleChange, errors }) => {
  
  return (
    <Box component="form" sx={{ mt: 3 }}>
      <TextField
        fullWidth
        label="Address Line 1"
        variant="outlined"
        value={formData.address1}
        onChange={handleChange('address1')}
        margin="normal"
        error={!!errors.address1}
        helperText={errors.address1}
      />
      <TextField
        fullWidth
        label="Address Line 2"
        variant="outlined"
        value={formData.address2}
        onChange={handleChange('address2')}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Zip Code"
        variant="outlined"
        value={formData.zip}
        onChange={handleChange('zip')}
        margin="normal"
        error={!!errors.zip}
        helperText={errors.zip}
      />
      <TextField
        fullWidth
        label="City"
        variant="outlined"
        value={formData.city}
        onChange={handleChange('city')}
        margin="normal"
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        fullWidth
        label="State"
        variant="outlined"
        value={formData.state}
        onChange={handleChange('state')}
        margin="normal"
        error={!!errors.state}
        helperText={errors.state}
      />
      
    </Box>
  );
};

export default AddressInfo;