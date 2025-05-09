// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext'; // ✅ Correct import

const Navbar = () => {
  const { toggleTheme, mode } = useThemeContext(); // ✅ Use correct function name

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          My Travel App
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
