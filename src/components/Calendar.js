import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const isToday = (date) => {
  const currentDate = '2025-05-14'; // Simulated current date to highlight
  return date === currentDate;
};

const Calendar = () => {
  const theme = useTheme(); // Get current theme

  const upcomingDates = [
    { date: '2025-05-10', day: 'Saturday' },
    { date: '2025-05-11', day: 'Sunday' },
    { date: '2025-05-12', day: 'Monday' },
    { date: '2025-05-13', day: 'Tuesday' },
    { date: '2025-05-14', day: 'Wednesday' }, // Will be highlighted
    { date: '2025-05-15', day: 'Thursday' },
    { date: '2025-05-16', day: 'Friday' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
        Upcoming Dates
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 1,
          p: 2,
          bgcolor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', // Conditionally change background
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        {/* Week Days Header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <Box key={day} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            <Typography variant="body2">{day}</Typography>
          </Box>
        ))}

        {/* Dates */}
        {upcomingDates.map((date, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              bgcolor: isToday(date.date)
                ? theme.palette.primary.main // Highlight today with primary color
                : theme.palette.mode === 'dark' ? '#444' : '#e0e0e0', // Dark theme background for non-today dates
              color: isToday(date.date) ? 'white' : theme.palette.text.primary, // Ensure text color contrasts well
              borderRadius: 2,
              textAlign: 'center',
              fontWeight: isToday(date.date) ? 'bold' : 'normal',
              boxShadow: 1,
            }}
          >
            <Typography variant="body2">{date.date}</Typography>
            <Typography
              variant="body2"
              color={isToday(date.date) ? 'white' : theme.palette.text.secondary}
            >
              {date.day}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Calendar;
