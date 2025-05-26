import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
  Container,
  useTheme,
  IconButton,
  Link
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import NavBar from '../components/NavBar';
import { Link as RouterLink } from 'react-router-dom';

// --- Data for movies and theatres ---
const movies = [
  { title: 'Mr Ex', age: '18+', date: '25 May 24', img: '/images/x.webp' },
  { title: 'Siko Siko', age: '18+', date: '25 May 24', img: '/images/sikosiko.jpg' },
  { title: 'Mission Impossible', age: '14+', date: '25 May 24', img: '/images/mi.jpg' },
  { title: 'Sinners', age: '16+', date: '25 May 24', img: '/images/sinners.jpg' },
  { title: 'Lilo and Stitch', age: '12+', date: '25 May 24', img: '/images/lilo.jpg' }
];

const theatres = [
  { name: 'City Center Alexandria', date: '19.05.24', desc: 'Located at San Stefano, Alexandria.', img: '/images/cs.jpg' },
  { name: 'City Center Almaza', date: '12.05.24', desc: 'One of the best cinemas in Cairo.', img: '/images/city.jpg' },
  { name: 'Cairo Festival Mall', date: '27.04.24', desc: 'Located in New Cairo.', img: '/images/cf.jpg' },
  { name: 'Mall Of Egypt', date: '12.05.24', desc: 'Biggest cinema in 6th October.', img: '/images/mall.jpg' }
];

function HomePage() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary' }}>
      <NavBar theatres={theatres} />

      {/* Hero Section */}
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url('/images/ProjectX.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          mb: 4
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.5)'
          }}
        />
        <Container sx={{ zIndex: 1, position: 'relative' }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 3 }}>
            Welcome to the Cinematic Universe
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Your ultimate destination for movies, showtimes, and an unforgettable experience.
          </Typography>
          <Button
            component={RouterLink}
            to="/comingsoon"
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: '1.2rem', fontWeight: 600 }}
          >
            Explore Movies
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 3 }}>
        <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
          Browse
        </Typography>

        {/* Movies Section */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
          Available Movies
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {movies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  width: 250,
                  height: 450,
                  borderRadius: 2,
                  boxShadow: 3,
                  display: 'flex',
                  alignItems: 'flex-end',
                  color: 'white',
                  backgroundImage: `url(${movie.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: 2
                  }}
                />
                <CardContent sx={{ p: 2, zIndex: 1, width: '100%' }}>
                  <Chip
                    label={movie.age}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255, 0, 0, 0.7)',
                      color: 'white',
                      fontWeight: 'bold',
                      mb: 1
                    }}
                  />
                  <Typography variant="subtitle1" fontWeight="bold">{movie.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>{movie.date}</Typography>
                  <Button
                    component={RouterLink}
                    to="/comingsoon"
                    variant="contained"
                    size="small"
                    sx={{ mt: 1.5, bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.primary.dark } }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Features Section */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
          Top Features
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 6, justifyContent: 'center' }}>
          <Chip label="Top Quality Movies" color="primary" />
          <Chip label="Comfort Seats" color="secondary" />
          <Chip label="24/7 Availability" color="info" />
          <Chip label="MAX 3D Cinemas" color="success" />
        </Box>

        {/* Theatres Section */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
          Cinema Theatres
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {theatres.map((theatre, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  borderRadius: 2,
                  boxShadow: 3,
                  display: 'flex',
                  alignItems: 'flex-end',
                  color: 'white',
                  backgroundImage: `url(${theatre.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: 2
                  }}
                />
                <Box sx={{ p: 2, flexGrow: 1, zIndex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">{theatre.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>{theatre.desc}</Typography>
                  <Typography variant="caption" sx={{ mt: 1, color: 'rgba(255, 255, 255, 0.6)' }}>
                    Last Updated: {theatre.date}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 1.5, borderColor: 'white', color: 'white', '&:hover': { borderColor: theme.palette.primary.light, color: theme.palette.primary.light } }}
                  >
                    View Showtimes
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box sx={{ bgcolor: 'secondary.main', p: { xs: 4, md: 6 }, mt: 8, width: '100vw' }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <img src="https://www.voxcinemas.com/images/vox-logo.png" alt="VOX Logo" style={{ height: '40px', marginBottom: theme.spacing(2) }} />
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                VOX Cinemas Egypt – Your ultimate destination for the best cinema experience.
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: 'text.secondary', '&:hover': { color: theme.palette.primary.main } }}><FacebookIcon /></IconButton>
                <IconButton sx={{ color: 'text.secondary', '&:hover': { color: theme.palette.primary.main } }}><InstagramIcon /></IconButton>
                <IconButton sx={{ color: 'text.secondary', '&:hover': { color: theme.palette.primary.main } }}><YouTubeIcon /></IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Quick Links
              </Typography>
              <Link href="#" color="text.secondary" display="block" underline="hover">Now Showing</Link>
              <Link href="#" color="text.secondary" display="block" underline="hover">Coming Soon</Link>
              <Link href="#" color="text.secondary" display="block" underline="hover">Cinemas</Link>
              <Link href="#" color="text.secondary" display="block" underline="hover">Offers</Link>
              <Link href="#" color="text.secondary" display="block" underline="hover">Promotions</Link>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Help
              </Typography>
              <Link href="#" color="text.secondary" display="block" underline="hover">Contact Us</Link>
              <Link href="#" color="text.secondary" display="block" underline="hover">FAQs</Link>
              <Link href="#" color="text.secondary" display="block" underline="hover">Terms & Conditions</Link>
              <Link href="#" color="text.secondary" display="block" underline="hover">Privacy Policy</Link>
              <Link href="#" color="text.secondary" display="block" underline="hover">Careers</Link>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Download Our App
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: 2, mt: 2 }}>
                <img src="https://www.voxcinemas.com/assets/images/google-play.png" alt="Google Play" style={{ width: '120px', cursor: 'pointer' }} />
                <img src="https://www.voxcinemas.com/assets/images/app-store.png" alt="App Store" style={{ width: '120px', cursor: 'pointer' }} />
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ color: 'text.disabled', mt: 6, textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} VOX Cinemas. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
