import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Box,
  InputAdornment,
  Paper,
  Grid,
  Button,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import CoupleIcon from '@mui/icons-material/People';
import FriendsIcon from '@mui/icons-material/GroupWork';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

export default function OnboardingDashboard() {
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [travelingWith, setTravelingWith] = useState('');
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleTravelingWithChange = (value) => {
    setTravelingWith(value);
  };

  const handleContinue = () => {
    navigate('/main-dashboard');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Plan your journey, your way!
            </Typography>
            <Typography variant="subtitle1">
              Let's create your personalized travel experience
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              Where would you like to go?
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter the destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              InputProps={{sx: { color: 'black' },
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
                
              }}
            />
          </Box>

          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              How long will you stay?
            </Typography>
            <DateRangePicker
              value={dateRange}
              onChange={(newValue) => setDateRange(newValue)}
              calendars={1}
              localeText={{ start: 'Start date', end: 'End date' }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  placeholder: 'Select duration',
                  InputProps: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon />
                      </InputAdornment>
                    ),
                  },
                },
              }}
            />
          </Box>

          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              Who are you traveling with?
            </Typography>
            <Grid container spacing={3}>
              {/* Solo Option */}
              <Grid item xs={6} sm={3}>
                <Box
                  onClick={() => handleTravelingWithChange('solo')}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: '2px solid',
                    padding: 2,
                    borderRadius: 2,
                    borderColor: travelingWith === 'solo' ? '#1976d2' : '#ccc',
                    '&:hover': { borderColor: '#1976d2' },
                  }}
                >
                  <PersonIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="body2">Solo</Typography>
                </Box>
              </Grid>

              {/* Family Option */}
              <Grid item xs={6} sm={3}>
                <Box
                  onClick={() => handleTravelingWithChange('family')}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: '2px solid',
                    padding: 2,
                    borderRadius: 2,
                    borderColor: travelingWith === 'family' ? '#1976d2' : '#ccc',
                    '&:hover': { borderColor: '#1976d2' },
                  }}
                >
                  <GroupIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="body2">Family</Typography>
                </Box>
              </Grid>

              {/* Couple Option */}
              <Grid item xs={6} sm={3}>
                <Box
                  onClick={() => handleTravelingWithChange('couple')}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: '2px solid',
                    padding: 2,
                    borderRadius: 2,
                    borderColor: travelingWith === 'couple' ? '#1976d2' : '#ccc',
                    '&:hover': { borderColor: '#1976d2' },
                  }}
                >
                  <CoupleIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="body2">Couple</Typography>
                </Box>
              </Grid>

              {/* Friends Option */}
              <Grid item xs={6} sm={3}>
                <Box
                  onClick={() => handleTravelingWithChange('friends')}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: '2px solid',
                    padding: 2,
                    borderRadius: 2,
                    borderColor: travelingWith === 'friends' ? '#1976d2' : '#ccc',
                    '&:hover': { borderColor: '#1976d2' },
                  }}
                >
                  <FriendsIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="body2">Friends</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* ✅ Continue Button */}
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleContinue}
               sx={{ width: '100%' }} 
            >
              Continue
            </Button>
          </Box>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
}
