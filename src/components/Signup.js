import React from "react";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import backgroundImage from "../aboutusback.png"; // Replace with actual image path
import "../style.css"; // Import external CSS

const SignUp = () => {
  return (
    <Box sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      backgroundImage: `url(${backgroundImage})`, // Full background image
      backgroundSize: "cover", // Ensure the background covers the entire screen
      backgroundPosition: "center", // Center the background image
      backgroundRepeat: "no-repeat", // Prevent repeating the background image
    }}>
      {/* Header - Similar to Home Page */}
      <Box sx={{ background: "linear-gradient(to right, #2c5364, #0f2027)", padding: "10px 0" }}>
        <Container>
          <Box display="flex" justifyContent="center" gap="40px">
            <Button component={Link} to="/" sx={{ color: "white", fontWeight: "bold", fontSize: "18px", letterSpacing: "1px" }}>
              Home
            </Button>
            <Button component={Link} to="/about" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>
              About Us
            </Button>
            <Button component={Link} to="/services" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>
              Services
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: "#0d3b66",
                color: "white",
                borderRadius: "25px",
                padding: "10px 25px",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#09234B" },
              }}
            >
              Contact
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SignUp Section */}
      <Box
        sx={{
          flexGrow: 1, // Ensures this section takes up available height
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center the form vertically
          padding: "50px 0", // Padding to give space around the content
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)", // Dark overlay for readability
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={5} sx={{ padding: "30px", borderRadius: "10px" }}>
            <Box textAlign="center" mb={3}>
              <LockIcon sx={{ fontSize: 40, color: "#1976D2" }} />
              <Typography variant="h5" fontWeight="bold">
                Create an Account
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Join Healthify to manage your healthcare data
              </Typography>
            </Box>

            {/* SignUp Form */}
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              sx={{ marginBottom: "16px" }}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              sx={{ marginBottom: "16px" }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ marginBottom: "16px" }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ marginBottom: "16px" }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                marginBottom: "16px",
                borderRadius: "25px",
                padding: "12px",
              }}
            >
              Sign Up
            </Button>

            <Typography variant="body2" align="center" mt={2}>
              Already have an account? <Link to="/login">Login here</Link>
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Footer - Same as Home Page */}
      <Box
        sx={{
          backgroundColor: "#1976D2",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "auto",
        }}
      >
        <Typography variant="body2">© 2025 Healthify. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
