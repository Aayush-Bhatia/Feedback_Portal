import React from 'react';
import { Typography, Grid, Button, Box, Paper } from '@mui/material'; // Paper import kiya
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * Renders the enhanced Home page content with a clean "hero" section.
 * @param {Object} props
 * @param {Function} props.setActivePage - Function from App.jsx to change the active page.
 */
export default function HomePage({ setActivePage }) { 
  return (
    
    // Paper component for clean look 
    <Paper elevation={3} className="p-8 md:p-12 rounded-lg shadow-lg bg-white">
      {/* manage grid container in 2 */}
      <Grid container spacing={6} alignItems="center">
        
        <Grid item xs={12} md={6}>
          <Box className="text-center md:text-left">
            {/* --- ENHANCED TYPOGRAPHY (Light BG ke liye) --- */}
            <Typography
              variant="h3" // Bada, impactful title
              component="h1"
              className="font-bold mb-4 text-gray-800" // Text color change kiya
            >
              Welcome to the Feedback Portal
            </Typography>

            <Typography
              variant="h6"
              className="mb-8 text-gray-600" // Text color change kiya
            >
              Your insights are invaluable. Help us improve our platform by
              sharing your thoughts, reporting bugs, or suggesting new
              features.
            </Typography>

            
            <Button
              variant="contained"
              color="primary" 
              className="font-semibold" 
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => setActivePage('Feedback')} 
            >
              Get Started
            </Button>
            <Typography variant="caption" display="block" className="mt-3 text-gray-500">
              (or select 'Feedback' from the sidebar)
            </Typography>
          </Box>
        </Grid>

        
        
        <Grid item xs={12} md={6}>
          <img
            src="https://illustrations.popsy.co/gray/customer-feedback.svg"
            alt="Feedback Illustration"
            className="mx-auto w-full max-w-sm md:max-w-md"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </Grid>

      </Grid>
    </Paper>
  );
}

