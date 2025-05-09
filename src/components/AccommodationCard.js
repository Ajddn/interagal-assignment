import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const AccommodationCard = ({ image, text }) => {
  return (
    <Card sx={{ width: 250, marginRight: 2,
        borderRadius: 2, }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Accommodation Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AccommodationCard;
