// src/pages/SignUpForm.jsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Divider,
  Link as MuiLink,
  InputAdornment,
  IconButton,
  useTheme,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';

// Yup validation schema for Sign Up
const schema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  emailOrPhone: yup.string().required('Email or Phone is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
}).required();

function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const navigate = useNavigate();
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log('Sign Up Data:', data);
    // Here you would typically handle the registration logic (e.g., API call)
    navigate('/login'); // Example: Navigate to login after successful signup
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
        overflow: 'hidden',    // Hide any overflow
        bgcolor: theme.palette.background.default,
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
        <Paper // Inner Paper for the form card's styling
          elevation={0} // No shadow here, but you can add theme.shadows[5] if you like
          sx={{
            color: theme.palette.text.primary,
            p: 4,
            width: '100%',
            maxWidth: 400, // Max width for the form itself
          }}
        >
          {/* VOX Logo */}
          <Box sx={{ mb: 4, textAlign: 'left' }}>
            <img src="https://www.voxcinemas.com/images/vox-logo.png" alt="VOX Logo" style={{ height: '30px' }} />
          </Box>

          <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 1 }}>
            Create Your Account
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Already have an account?{' '}
            <MuiLink
              component={Link}
              to="/login"
              underline="none"
              sx={{ cursor: 'pointer', color: theme.palette.primary.light }}
            >
              Log in
            </MuiLink>
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Full Name"
              {...register('fullName')}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              sx={{ mb: 2 }}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon sx={{ color: theme.palette.action.active }} />
                    </InputAdornment>
                  ),
                  sx: { color: theme.palette.text.primary },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
              }}
              InputLabelProps={{ sx: { color: theme.palette.text.secondary } }}
            />

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email or Phone Number"
              {...register('emailOrPhone')}
              error={!!errors.emailOrPhone}
              helperText={errors.emailOrPhone?.message}
              sx={{ mb: 2 }}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon sx={{ color: theme.palette.action.active }} />
                    </InputAdornment>
                  ),
                  sx: { color: theme.palette.text.primary },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
              }}
              InputLabelProps={{ sx: { color: theme.palette.text.secondary } }}
            />

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ mb: 2 }}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: theme.palette.action.active }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: theme.palette.action.active }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: { color: theme.palette.text.primary },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
              }}
              InputLabelProps={{ sx: { color: theme.palette.text.secondary } }}
            />

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              sx={{ mb: 3 }}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: theme.palette.action.active }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                        sx={{ color: theme.palette.action.active }}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: { color: theme.palette.text.primary },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
              }}
              InputLabelProps={{ sx: { color: theme.palette.text.secondary } }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 1.5 }}
            >
              Create Account
            </Button>
          </form>

          <Divider sx={{ my: 4, '&::before, &::after': { borderColor: theme.palette.divider } }}>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              OR SIGN UP WITH
            </Typography>
          </Divider>

          <Box display="flex" gap={2} justifyContent="space-between">
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              fullWidth
              sx={{ py: 1.2, color: theme.palette.text.primary, borderColor: theme.palette.divider }}
            >
              Google
            </Button>
            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              fullWidth
              sx={{ py: 1.2, color: theme.palette.text.primary, borderColor: theme.palette.divider }}
            >
              Facebook
            </Button>
          </Box>
        </Paper>
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
          backgroundImage: `url('https://images.unsplash.com/photo-1574883498877-33a759392e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcwMnwwfDF8c2VhcmNofDE4fHxjaW5lbWF8ZW58MHx8fHwxNzE2NDAxODgyfDA&ixlib=rb-4.0.3&q=80&w=1080')`, // Your image URL
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
            bgcolor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Join the Cinema Club
          </Typography>
          <Typography variant="h6">
            Get exclusive access to pre-sales, discounts, and member-only events.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpForm;