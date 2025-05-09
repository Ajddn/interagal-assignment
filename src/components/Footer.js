import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 2, mt: 5, textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Travel Planner. All rights reserved.
      </Typography>
    </Box>
  );
}
