import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import AccommodationCard from "../components/AccommodationCard";
import ActivityCard from "../components/ActivityCard ";
import Calendar from "../components/Calendar";
import { images } from "../assets/image";

export default function MainDashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Card containing all content */}
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box sx={{ width: "100%" }}>
          {/* Grid for positioning content */}
          <Grid container justifyContent="space-between" alignItems="center">
            {/* Left side - Hello Chaavi and Ready for the trip */}
            <Grid item sx={{ textAlign: "left" }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Hello Chaavi!
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                Ready for the trip?
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                fontWeight="bold"
                sx={{ mt: 8 }}
              >
                Your upcoming trips
              </Typography>
            </Grid>

            {/* Right side - Avatar */}
            <Grid item>
              <Avatar
                sx={{
                  bgcolor: "#FFA500",
                  width: 56,
                  height: 56,
                  fontSize: 24,
                }}
              >
                C
              </Avatar>
            </Grid>
          </Grid>
        </Box>

        {/* Placeholder for Image */}
        <Box
          component="img"
          src={images.tokyo}
          alt="Your Trip"
          sx={{
            mt: 4,
            width: "100%",
            height: 600,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />

        {/* Blue Card for Flight Details */}
        <Card
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            mt: 4,
            width: "100%",
            borderRadius: 3,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "70%" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Flight Details
              </Typography>

              <Typography variant="subtitle1">
                Date & Time: May 10, 2025 - 10:00 AM
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Typography variant="body1" sx={{ mr: 2 }}>
                  Arrival: New York
                </Typography>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "#1976d2", fontSize: 14 }}
                  >
                    →
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ ml: 2 }}>
                  Destination: Los Angeles
                </Typography>
              </Box>
            </Box>

            {/* Airplane Image */}
            <Box>
              <img
                src={images.plane}
                alt="Airplane"
                style={{
                  width: 150,
                  height: "auto",
                  objectFit: "contain",
                  marginLeft: "20px",
                  borderRadius:"5px",
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Accommodation Section */}
        <Box sx={{ width: "100%", mt: 4 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5" fontWeight="bold">
                Accommodation
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="text" color="primary">
                See All
              </Button>
            </Grid>
          </Grid>

          {/* Horizontal Scroller */}
          <Box sx={{ display: "flex", overflowX: "auto", mt: 2 }}>
            <AccommodationCard
              image={images.tokyo}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <AccommodationCard
              image={images.tokyo}
              text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <AccommodationCard
              image={images.tokyo}
              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
            />
            <AccommodationCard
              image={images.tokyo}
              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
            />
          </Box>
        </Box>

        {/* Activities Section */}
        <Box sx={{ width: "100%", mt: 4 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5" fontWeight="bold">
                Activities
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="text" color="primary">
                See All
              </Button>
            </Grid>
          </Grid>

          {/* Calendar */}
          <Calendar />

          {/* Activities Cards */}
          <Box sx={{ display: "flex", overflowX: "auto", mt: 2 }}>
            <ActivityCard
              image={images.tokyo}
              place="Central Park"
              timing="10:00 AM"
              duration="2 hours"
              pickups="Hotel Lobby"
            />
           
            <ActivityCard
              image={images.tokyo}
              place="Central Park"
              timing="10:00 AM"
              duration="2 hours"
              pickups="Hotel Lobby"
            />
           <ActivityCard
              image={images.tokyo}
              place="Central Park"
              timing="10:00 AM"
              duration="2 hours"
              pickups="Hotel Lobby"
            />
            <ActivityCard
              image={images.tokyo}
              place="Central Park"
              timing="10:00 AM"
              duration="2 hours"
              pickups="Hotel Lobby"
            />
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
