import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  IconButton,
  InputAdornment,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import loginIllustration from '../assets/img1.png';
import { signInWithGoogle } from '../firebase/authService';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    console.log('Login attempted', { email, password });
  };

  const handleGoogleLogin = async () => {
    try {
      const { accessToken } = await signInWithGoogle();
      localStorage.setItem('accessToken', accessToken || '');
      navigate('/token');
    } catch (error: any) {
      console.error('FULL ERROR:', error);
      console.error('Error code:', error.code);
      alert(`Google login failed: ${error.code || 'Unknown error'}`);
    }
  };

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '999px',
      height: 56,
      backgroundColor: '#fff',
      '& fieldset': { borderColor: '#e0e0e0' },
      '&:hover fieldset': { borderColor: '#b0b0b0' },
      '&.Mui-focused fieldset': { borderColor: '#000' },
    },
    '& .MuiOutlinedInput-input': {
      fontSize: 14,
      color: '#333',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#fff',
        overflowX: 'hidden',
      }}
    >
      {/* Left Side - Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 3, md: 6 },
          py: { xs: 5, md: 6 },
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 420 }}>
          {/* Title - centered */}
          <Typography
            sx={{
              fontSize: { xs: 32, md: 42 },
              fontWeight: 800,
              color: '#0a0a0a',
              letterSpacing: '-1px',
              mb: 1.5,
              textAlign: 'center',
            }}
          >
            Welcome back!
          </Typography>

          {/* Subtitle - centered */}
          <Typography
            sx={{
              fontSize: 13,
              color: '#6b6b6b',
              lineHeight: 1.6,
              mb: 4,
              textAlign: 'center',
              maxWidth: 360,
              mx: 'auto',
            }}
          >
            Simplify your workflow and boost your productivity
            <br />
            with Tuga's App. Get started for free.
          </Typography>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              <TextField
                placeholder="Username"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Invalid email format' : ''}
                sx={textFieldSx}
              />

              <TextField
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={textFieldSx}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        sx={{ color: '#9e9e9e' }}
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography
                sx={{
                  fontSize: 12,
                  textAlign: 'right',
                  color: '#333',
                  cursor: 'pointer',
                  mt: -0.5,
                }}
              >
                Forgot Password?
              </Typography>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disableElevation
                sx={{
                  borderRadius: '999px',
                  backgroundColor: '#000',
                  color: '#fff',
                  py: 1.8,
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: 'none',
                  mt: 1,
                  '&:hover': { backgroundColor: '#1a1a1a' },
                }}
              >
                Login
              </Button>
            </Stack>
          </form>

          {/* Divider */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              my: 3.5,
            }}
          >
            <Box sx={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
            <Typography sx={{ px: 2, fontSize: 12, color: '#666' }}>
              or continue with
            </Typography>
            <Box sx={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
          </Box>

          {/* Social Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2.5 }}>
            <IconButton
              onClick={handleGoogleLogin}
              sx={{
                width: 44,
                height: 44,
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': { backgroundColor: '#222' },
              }}
            >
              <GoogleIcon sx={{ fontSize: 22 }} />
            </IconButton>

            <IconButton
              onClick={() => {}}
              sx={{
                width: 44,
                height: 44,
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': { backgroundColor: '#222' },
              }}
            >
              <AppleIcon sx={{ fontSize: 24 }} />
            </IconButton>

            <IconButton
              onClick={() => {}}
              sx={{
                width: 44,
                height: 44,
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': { backgroundColor: '#222' },
              }}
            >
              <FacebookIcon sx={{ fontSize: 22 }} />
            </IconButton>
          </Box>

          {/* Footer */}
          <Typography
            sx={{
              mt: { xs: 4, md: 6 },
              textAlign: 'center',
              fontSize: 12,
              color: '#555',
            }}
          >
            Not a member?{' '}
            <span
              style={{
                fontWeight: 600,
                color: '#000',
                cursor: 'pointer',
              }}
            >
              Register now
            </span>
          </Typography>
        </Box>
      </Box>

      {/* Right Side - Illustration */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          p: { md: 4 },
          backgroundColor: '#fff',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '90%',
            backgroundColor: '#EAF5EC',
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
          }}
        >
          <Box
            component="img"
            src={loginIllustration}
            alt="Login Illustration"
            sx={{
              width: '80%',
              height: 'auto',
              maxHeight: '60%',
              objectFit: 'contain',
            }}
          />

          <Typography
            sx={{
              mt: 4,
              fontSize: { md: 18, lg: 20 },
              fontWeight: 500,
              color: '#1a1a1a',
              textAlign: 'center',
              maxWidth: 340,
              lineHeight: 1.4,
            }}
          >
            Make your work easier and organized with Tuga's App
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;