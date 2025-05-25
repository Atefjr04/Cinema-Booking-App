// src/App.jsx
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles/theme'; // Make sure your theme.js or theme.jsx file is correctly located here
import Home from './pages/HomePage'; // Assuming you have a HomePage.jsx
import LoginPage from './pages/LoginPage';   // <-- IMPORTANT: Changed import name to LoginPage, and file path to LoginPage.jsx
import SignUpForm from './pages/SignUpForm'; // Assuming SignUpForm.jsx and SignUpForm component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies a consistent baseline for CSS */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Now the login route is /login, pointing to the LoginPage component */}
          <Route path="/login" element={<LoginPage />} />
          {/* The signup route remains /signup, pointing to the SignUpForm component */}
          <Route path="/signup" element={<SignUpForm />} />
          {/* Add more routes for other pages here as your app grows */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;