import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Divider, Stack } from '@mui/material';
import GoogleButton from '../components/googlebutton';
import img1 from '../assets/img1.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);

    console.log('Login attempted', {
      email,
      password,
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
     
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
        }}
      >
        <Box sx={{ maxWidth: 400, width: '100%' }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold' }}
            gutterBottom
          >
            Welcome back!
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Simplify your workflow and boost your productivity with Tuga's
            App.
          </Typography>

          <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                error={emailError}
                helperText={
                  emailError ? 'Invalid email format' : ''
                }
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Typography
                variant="caption"
                align="right"
                sx={{
                  cursor: 'pointer',
                  color: 'text.secondary',
                }}
              >
                Forgot Password?
              </Typography>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: '50px',
                  bgcolor: '#000',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#222',
                  },
                }}
              >
                Login
              </Button>
            </Stack>
          </form>

          <Divider sx={{ my: 3 }}>
            or continue with
          </Divider>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <GoogleButton onClick={() => {}} />
          </Box>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
            Not a member?{' '}
            <span
              style={{
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Register now
            </span>
          </Typography>
        </Box>
      </Box>

      
      <Box
        sx={{
          flex: 1,
          bgcolor: '#E8F5E9',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
        }}
      >
        <Box
          component="img"
          src={img1}
          alt="Login Illustration"
          sx={{
            maxWidth: '80%',
            height: 'auto',
          }}
        />
      </Box>
    </Box>
  );
};

export default LoginPage;


