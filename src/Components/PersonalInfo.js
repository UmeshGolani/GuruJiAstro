// src/components/PersonalInfo.js
import React from 'react';
import { TextField, Box } from '@mui/material';

const PersonalInfo = ({ formData, handleChange, errors }) => {
  return (
    <Box component="form" sx={{ mt: 3 }}>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange('name')}
        margin="normal"
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange('email')}
        margin="normal"
        error={!!errors.email}
        helperText={errors.email}
        type="email"
      />
      <TextField
        fullWidth
        label="Phone"
        variant="outlined"
        value={formData.phone}
        onChange={handleChange('phone')}
        margin="normal"
        error={!!errors.phone}
        helperText={errors.phone}
        type="tel"
      />
    </Box>
  );
};

export default PersonalInfo;