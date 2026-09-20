import React from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

interface Props {
  onClick: () => void;
}

const GoogleButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<GoogleIcon />}
      onClick={onClick}
      sx={{
        borderRadius: '50px',
        textTransform: 'none',
        color: '#000',
        borderColor: '#ccc',
        padding: '10px 24px',
        '&:hover': { borderColor: '#000', backgroundColor: '#f5f5f5' }
      }}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;