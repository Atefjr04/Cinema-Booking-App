// src/theme.jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
    primary: {
      main: '#f50057', // The vibrant pink/red color for primary actions
    },
    secondary: {
      main: '#444', // A darker grey for secondary elements like borders
    },
    background: {
      default: '#1a1a1a', // The main dark background
      paper: 'transparent', // Make Paper components transparent (if needed for the dark theme)
    },
    text: {
      primary: '#ffffff', // White text for main content
      secondary: '#aaa', // Lighter grey for secondary text (e.g., helper text)
      disabled: '#888', // Grey for disabled states and placeholders
    },
  },
  typography: {
    fontFamily: [
      'Roboto', // Standard sans-serif, or choose one closer to the image's font
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h5: {
      fontWeight: 700, // Bold for titles
    },
    h6: {
      fontWeight: 700,
    },
    body2: {
      color: '#aaa', // Default for body2
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase by default
          borderRadius: 8, // Slightly more rounded corners
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#e0004f', // Darker pink on hover
          },
        },
        outlined: {
          borderColor: '#444', // Darker grey border for outlined buttons
          color: '#fff', // White text for outlined buttons
          '&:hover': {
            backgroundColor: '#333', // Slight background on hover
            borderColor: '#555',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#333', // Darker background for input fields
            color: '#fff', // White text in input fields
            '& fieldset': {
              borderColor: '#555', // Default border color
            },
            '&:hover fieldset': {
              borderColor: '#777', // Border on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f50057', // Primary color on focus
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#888', // Placeholder color
            opacity: 1, // Ensure placeholder is not transparent
          },
          '& .MuiInputAdornment-root': {
            color: '#888', // Icon color inside text fields
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#f50057', // Pink for links
          fontWeight: 'bold',
          textDecoration: 'none', // No underline by default
          '&:hover': {
            textDecoration: 'underline', // Underline on hover
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          '&::before, &::after': {
            borderColor: '#444', // Darker grey for divider lines
          },
          color: '#888', // Color for the "or" text in divider
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundColor: 'transparent', // Ensure paper is transparent unless specified otherwise
            }
        }
    }
  },
});

export default theme;