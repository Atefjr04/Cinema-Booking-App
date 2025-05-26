// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 🟡 Import MUI ThemeProvider and createTheme
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// 🟢 Create a custom MUI theme
const theme = createTheme({
  palette: {
    background: {
      default: '#f9f9f9',  // Light background to avoid grey screen
      paper: '#ffffff',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
