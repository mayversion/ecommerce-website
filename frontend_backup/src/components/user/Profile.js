import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="body1">
          Profile management will be implemented here.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Profile;




