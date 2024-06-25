// src/components/Confirmation.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Confirmation = ({ formData }) => {
  const { name, email, phone, address1, address2, city, state, zip } = formData;

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Confirmation
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address Line 1" secondary={address1} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address Line 2" secondary={address2 || 'N/A'} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="State" secondary={state} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zip Code" secondary={zip} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Confirmation;
