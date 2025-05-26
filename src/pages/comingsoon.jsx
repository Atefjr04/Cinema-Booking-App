// src/pages/ComingSoon.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, useTheme } from '@mui/material';

const upcomingMovies = [
  {
    title: "Deadpool & Wolverine",
    releaseDate: "July 26, 2024",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Deadpool_%26_Wolverine_poster.jpg"
  },
  {
    title: "Joker: Folie à Deux",
    releaseDate: "October 4, 2024",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e4/Joker%2C_Folie_%C3%A0_Deux_poster.jpg"
  },
  {
    title: "Inside Out 2",
    releaseDate: "June 14, 2024",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/75/Inside_Out_2_poster.jpg"
  },
  {
    title: "Gladiator II",
    releaseDate: "November 22, 2024",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/30/Gladiator_2_poster.jpg"
  },
  {
    title: "The Lord of the Rings: The War of the Rohirrim",
    releaseDate: "December 13, 2024",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/77/The_Lord_of_the_Rings_The_War_of_the_Rohirrim_poster.jpg"
  },
];

const ComingSoon = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: 3,
        py: 6,
        backgroundColor: theme?.palette?.background?.default || '#fafafa', // fallback bg color
      }}
    >
      <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
        🎬 Coming Soon to Cinemas
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign="center" mb={6}>
        Get ready for an epic lineup of upcoming blockbusters!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {upcomingMovies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                maxWidth: 300,
                mx: 'auto',
                bgcolor: theme?.palette?.background?.paper || '#fff',
                boxShadow: 4,
                borderRadius: 3,
              }}
            >
              <CardMedia
                component="img"
                height="420"
                image={movie.poster}
                alt={movie.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Release Date: {movie.releaseDate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ComingSoon;
