// src/components/NavBar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

// --- Icon Imports ---
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar({ theatres = [] }) { // Default theatres to an empty array to prevent errors
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // This is fine for the *Navbar's* responsiveness

  // State for location menu
  const [anchorElLocation, setAnchorElLocation] = useState(null);
  const openLocationMenu = Boolean(anchorElLocation);

  const handleLocationClick = (event) => {
    setAnchorElLocation(event.currentTarget);
  };

  const handleLocationClose = () => {
    setAnchorElLocation(null);
  };

  const handleSelectLocation = (location) => {
    console.log(`Selected location: ${location.name}`);
    // Implement your logic to save the selected location (e.g., in Context or Redux)
    handleLocationClose();
  };

  // State for language menu (example)
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);
  const openLanguageMenu = Boolean(anchorElLanguage);

  const handleLanguageClick = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorElLanguage(null);
  };

  const handleSelectLanguage = (lang) => {
    console.log(`Selected language: ${lang}`);
    // Implement language change logic here
    handleLanguageClose();
  };

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavLinkClick = (path) => {
      setMobileMenuOpen(false); // Close menu on click
      navigate(path); // Navigate
  };


  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.paper, // Using theme's paper background
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left section: Logo and Nav Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="https://www.voxcinemas.com/images/vox-logo.png"
              alt="VOX Logo"
              style={{ height: '40px', marginRight: '20px', cursor: 'pointer' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button component={Link} to="/" color="inherit" sx={{ mx: 1, fontWeight: 600, color: theme.palette.text.primary }}>MOVIES</Button>
            <Button component={Link} to="/cinemas" color="inherit" sx={{ mx: 1, fontWeight: 600, color: theme.palette.text.primary }}>CINEMAS</Button>
            <Button color="inherit" sx={{ mx: 1, fontWeight: 600, color: theme.palette.text.primary }}>OFFERS</Button>
            <Button color="inherit" sx={{ mx: 1, fontWeight: 600, color: theme.palette.text.primary }}>CONTACT</Button>
          </Box>
        </Box>

        {/* Right section: Location, Search, Language, Sign In */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Search Icon Button (Desktop and Mobile) */}
          <IconButton color="inherit" sx={{ color: theme.palette.text.primary, '&:hover': { color: theme.palette.primary.main } }}>
            <SearchIcon />
          </IconButton>

          {/* Location Selector */}
          <Button
            id="location-button"
            aria-controls={openLocationMenu ? 'location-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openLocationMenu ? 'true' : undefined}
            onClick={handleLocationClick}
            sx={{
              ml: 1,
              color: theme.palette.text.primary,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { color: theme.palette.primary.main }
            }}
            startIcon={<LocationOnIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Select Location
          </Button>
          <Menu
            id="location-menu"
            anchorEl={anchorElLocation}
            open={openLocationMenu}
            onClose={handleLocationClose}
            MenuListProps={{ 'aria-labelledby': 'location-button' }}
            PaperProps={{ sx: { bgcolor: theme.palette.background.paper, boxShadow: theme.shadows[3] } }}
          >
            {theatres.length > 0 ? (
              theatres.map((theatre) => (
                <MenuItem
                  key={theatre.name}
                  onClick={() => handleSelectLocation(theatre)}
                  sx={{ color: theme.palette.text.primary, '&:hover': { bgcolor: theme.palette.action.hover } }}
                >
                  {theatre.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled sx={{ color: theme.palette.text.secondary }}>No locations available</MenuItem>
            )}
          </Menu>

          {/* Language Selector */}
          <Button
            id="language-button"
            aria-controls={openLanguageMenu ? 'language-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openLanguageMenu ? 'true' : undefined}
            onClick={handleLanguageClick}
            sx={{
              ml: 1,
              color: theme.palette.text.primary,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { color: theme.palette.primary.main }
            }}
            startIcon={<LanguageIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          >
            EN
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorElLanguage}
            open={openLanguageMenu}
            onClose={handleLanguageClose}
            MenuListProps={{ 'aria-labelledby': 'language-button' }}
            PaperProps={{ sx: { bgcolor: theme.palette.background.paper, boxShadow: theme.shadows[3] } }}
          >
            <MenuItem onClick={() => handleSelectLanguage('EN')} sx={{ color: theme.palette.text.primary, '&:hover': { bgcolor: theme.palette.action.hover } }}>EN</MenuItem>
            <MenuItem onClick={() => handleSelectLanguage('AR')} sx={{ color: theme.palette.text.primary, '&:hover': { bgcolor: theme.palette.action.hover } }}>AR</MenuItem>
          </Menu>

          {/* Sign In / Join Now Button */}
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            sx={{ ml: 2, textTransform: 'none', px: 2, py: 1, fontWeight: 600 }}
          >
            Sign In / Join Now
          </Button>

          {/* Mobile Hamburger Menu Icon */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, ml: 1, color: theme.palette.text.primary }}
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu Drawer (simple Box for now) */}
      {mobileMenuOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            bgcolor: theme.palette.background.paper,
            zIndex: theme.zIndex.appBar - 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            transition: 'transform 0.3s ease-in-out',
            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: theme.palette.text.primary,
            }}
            onClick={handleMobileMenuToggle}
          >
            <CloseIcon />
          </IconButton>
          <Button component={Link} to="/" onClick={() => handleMobileNavLinkClick('/')} sx={{ my: 1, fontWeight: 600, color: theme.palette.text.primary }}>MOVIES</Button>
          <Button component={Link} to="/cinemas" onClick={() => handleMobileNavLinkClick('/cinemas')} sx={{ my: 1, fontWeight: 600, color: theme.palette.text.primary }}>CINEMAS</Button>
          <Button onClick={() => handleMobileNavLinkClick('/offers')} sx={{ my: 1, fontWeight: 600, color: theme.palette.text.primary }}>OFFERS</Button>
          <Button onClick={() => handleMobileNavLinkClick('/contact')} sx={{ my: 1, fontWeight: 600, color: theme.palette.text.primary }}>CONTACT</Button>
        </Box>
      )}
    </AppBar>
  );
}

export default NavBar;