// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Link as MuiLink,
  useTheme,
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    console.log('Attempting sign-in with:', { email, password });

    if (email === 'test@example.com' && password === 'password') {
      console.log('Sign-in successful! Redirecting to Home...');
      navigate('/');
    } else {
      console.log('Sign-in failed. Please check credentials.');
      // You might want to show an error message to the user here
    }
  };

  return (
    // THIS IS THE CRITICAL ROOT BOX FOR THE ENTIRE PAGE LAYOUT
    <Box
      sx={{
        width: '100vw',        // Guarantee 100% of viewport width
        height: '100vh',       // Guarantee 100% of viewport height
        display: 'flex',       // Enable Flexbox
        flexDirection: 'row',  // Ensure children are side-by-side
        flexWrap: 'nowrap',    // Prevent wrapping of children on smaller screens (force side-by-side)
        overflow: 'hidden',    // Hide any overflow (e.g., if content exceeds viewport)
        bgcolor: theme.palette.background.default, // Use theme background color
        color: theme.palette.text.primary,
      }}
    >
      {/* Left Section: Form */}
      <Box
        sx={{
          flex: 1, // Distribute available space equally
          width: '50%', // Explicitly occupy 50% of parent's width
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 2, sm: 3, md: 5 }, // Responsive padding for the entire form side
          bgcolor: theme.palette.background.paper, // Form side background
        }}
      >
        <Box // Inner Box for the form card's styling
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 2,
            boxShadow: theme.shadows[5],
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: { xs: '90%', sm: 450 }, // Max width for the form itself
            width: '100%', // Ensure it takes 100% of its flex parent up to maxWidth
            textAlign: 'center',
          }}
        >
          {/* VOX Logo Placeholder */}
          <img
            src="/images/logo.png"
            alt="VOX Cinemas Logo"
            style={{ width: 120, margin: '0 auto 20px auto', display: 'block' }}
          />

          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
            Welcome Back!
          </Typography>

          <form onSubmit={handleSignIn}>
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: theme.palette.divider },
                  '&:hover fieldset': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                },
                '& .MuiInputLabel-root': { color: theme.palette.text.secondary },
                '& .MuiInputBase-input': { color: theme.palette.text.primary },
              }}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: theme.palette.divider },
                  '&:hover fieldset': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                },
                '& .MuiInputLabel-root': { color: theme.palette.text.secondary },
                '& .MuiInputBase-input': { color: theme.palette.text.primary },
              }}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.5, fontWeight: 600 }}
            >
              Sign In
            </Button>
          </form>

          <MuiLink
            component={Link}
            to="/forgot-password"
            sx={{
              mt: 1,
              textTransform: 'none',
              color: theme.palette.text.secondary,
              '&:hover': { color: theme.palette.primary.light, textDecoration: 'underline' }
            }}
          >
            Forgot password?
          </MuiLink>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            Don't have an account?{' '}
            <MuiLink
              component={Link}
              to="/signup"
              sx={{ color: theme.palette.primary.light, textDecoration: 'none' }}
            >
              Join Now
            </MuiLink>
          </Typography>
        </Box>
      </Box>

      {/* Right Section: Promotional Content (Big Picture) */}
      <Box
        sx={{
          flex: 1, // Distribute available space equally
          width: '50%', // Explicitly occupy 50% of parent's width
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          backgroundImage: `url('https://images.unsplash.com/photo-1542204165-748a4d467727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcwMnwwfDF8c2VhcmNofDE3fHxjaW5lbWF8ZW58MHx8fHwxNzE2NDAxODgyfDA&ixlib=rb-4.0.3&q=80&w=1080')`, // Your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          color: 'white',
        }}
      >
        {/* Optional: Overlay for better text readability on image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Unlock a World of Movies
          </Typography>
          <Typography variant="h6">
            Sign in for personalized recommendations and exclusive offers.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;