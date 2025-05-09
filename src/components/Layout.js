// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh" // 🔑 Ensures layout takes full height
    >
      <Navbar />

      <Box component="main" flex={1} p={2}>
        {children}
      </Box>

      <Footer /> {/* This will now stick to the bottom */}
    </Box>
  );
};

export default Layout;
