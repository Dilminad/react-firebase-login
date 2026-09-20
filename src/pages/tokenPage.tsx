
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TokenPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Login Successful!
      </Typography>

      <Typography sx={{ mb: 3, wordBreak: 'break-all', maxWidth: 600 }}>
        {token || 'No token found'}
      </Typography>

      <Button variant="contained" onClick={() => navigate('/')}>
        Go Back
      </Button>
    </Box>
  );
};

export default TokenPage;