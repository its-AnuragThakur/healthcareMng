import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../aboutusback.png"; // Ensure this file exists

const Hospital = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <AppBar position="static" sx={{ background: "linear-gradient(to right, #2c5364, #0f2027)", padding: "10px 0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          <Button component={Link} to="/" sx={{ color: "white", fontWeight: "bold", fontSize: "18px", letterSpacing: "1px" }}>Home</Button>
          <Button component={Link} to="/about" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>About Us</Button>
          <Button component={Link} to="/services" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>Services</Button>
          <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: "#0d3b66", color: "white", borderRadius: "25px", padding: "10px 25px", fontSize: "16px", fontWeight: "bold", "&:hover": { backgroundColor: "#09234B" } }}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          padding: "100px 0",
          textAlign: "center",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)"
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ fontWeight: "bold", letterSpacing: "1px", textShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}>Available Hospitals</Typography>
          <Typography variant="h6" sx={{ maxWidth: "700px", margin: "auto", opacity: "0.9", fontSize: "20px" }}>
            Find the best hospitals near you for emergency or scheduled visits.
          </Typography>
        </Container>
      </Box>

      {/* Hospital List Section with Horizontal Scroll */}
      <Box sx={{ backgroundColor: "#ffffff", padding: "60px 0", textAlign: "center", flex: 1 }}>
        <Container>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", letterSpacing: "1px", marginBottom: "30px" }}>Our Partner Hospitals</Typography>

          {/* Horizontal Scroll Container */}
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: "30px",  // Add some gap between the hospital boxes
              scrollSnapType: "x mandatory",
              paddingBottom: "20px", // Space at the bottom
            }}
          >
            {/* Hospital 1 */}
            <Paper sx={{ padding: "30px", minWidth: "250px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "15px", transition: "0.3s", "&:hover": { boxShadow: "0px 4px 30px rgba(0,0,0,0.15)", transform: "translateY(-5px)" }, scrollSnapAlign: "start" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>SRM Global Hospital</Typography>
              <Typography variant="body2" sx={{ marginTop: "10px", opacity: "0.8", textAlign: "center" }}>
                Comprehensive care with a range of specialties. Your health is our priority.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#0d3b66",
                  color: "white",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  fontSize: "16px",
                  "&:hover": { backgroundColor: "#09234B" }
                }}
              >
                Contact Us
              </Button>
            </Paper>

            {/* Hospital 2 */}
            <Paper sx={{ padding: "30px", minWidth: "250px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "15px", transition: "0.3s", "&:hover": { boxShadow: "0px 4px 30px rgba(0,0,0,0.15)", transform: "translateY(-5px)" }, scrollSnapAlign: "start" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Sunshine Hospital</Typography>
              <Typography variant="body2" sx={{ marginTop: "10px", opacity: "0.8", textAlign: "center" }}>
                Expert specialists available for all your medical needs.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#0d3b66",
                  color: "white",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  fontSize: "16px",
                  "&:hover": { backgroundColor: "#09234B" }
                }}
              >
                Contact Us
              </Button>
            </Paper>

            {/* Hospital 3 */}
            <Paper sx={{ padding: "30px", minWidth: "250px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "15px", transition: "0.3s", "&:hover": { boxShadow: "0px 4px 30px rgba(0,0,0,0.15)", transform: "translateY(-5px)" }, scrollSnapAlign: "start" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Greenwood Medical</Typography>
              <Typography variant="body2" sx={{ marginTop: "10px", opacity: "0.8", textAlign: "center" }}>
                State-of-the-art facilities and compassionate care for all ages.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#0d3b66",
                  color: "white",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  fontSize: "16px",
                  "&:hover": { backgroundColor: "#09234B" }
                }}
              >
                Contact Us
              </Button>
            </Paper>

            {/* Hospital 4 */}
            <Paper sx={{ padding: "30px", minWidth: "250px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "15px", transition: "0.3s", "&:hover": { boxShadow: "0px 4px 30px rgba(0,0,0,0.15)", transform: "translateY(-5px)" }, scrollSnapAlign: "start" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Lakeside Healthcare</Typography>
              <Typography variant="body2" sx={{ marginTop: "10px", opacity: "0.8", textAlign: "center" }}>
                World-class facilities in the heart of the city.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#0d3b66",
                  color: "white",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  fontSize: "16px",
                  "&:hover": { backgroundColor: "#09234B" }
                }}
              >
                Contact Us
              </Button>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#1976D2", color: "white", textAlign: "center", padding: "20px", marginTop: "auto" }}>
        <Typography variant="body2">© 2025 Healthify. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Hospital;
