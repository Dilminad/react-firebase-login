import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TokenPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login Successful!
      </Typography>

      <Typography
        variant="body1"
        sx={{ wordBreak: 'break-all', mb: 3, maxWidth: 600, textAlign: 'center' }}
      >
        Your Access Token: {token || 'No token found'}
      </Typography>

      <Button variant="contained" onClick={() => navigate('/')}>
        Go Back
      </Button>
    </Box>
  );
};

export default TokenPage;