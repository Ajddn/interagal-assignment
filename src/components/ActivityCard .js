// src/components/ActivityCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ActivityCard = ({ image, place, timing, duration, pickups }) => {
  return (
    <Card sx={{ display: 'flex', height: 200,width: 300, marginRight: 2, border: '1px solid #ddd', borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 200, objectFit: 'cover' }}
        image={image}
        alt="Activity Image"
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold">{place}</Typography>
        <Typography variant="body2" color="text.secondary">Timing: {timing}</Typography>
        <Typography variant="body2" color="text.secondary">Duration: {duration}</Typography>
        <Typography variant="body2" color="text.secondary">Pickups: {pickups}</Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
