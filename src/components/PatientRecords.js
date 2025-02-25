import React from "react";
import { AppBar, Toolbar, Button, Container, Box, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const PatientRecords = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <AppBar position="static" sx={{ background: "linear-gradient(to right, #2c5364, #0f2027)", padding: "10px 0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          <Button component={Link} to="/" sx={{ color: "white", fontWeight: "bold", fontSize: "18px", letterSpacing: "1px" }}>Home</Button>
          <Button component={Link} to="/about" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>About Us</Button>
          <Button component={Link} to="/services" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>Services</Button>
          <Button component={Link} to="/contact" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Container sx={{ padding: "60px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "30px" }}>Patient Records Management</Typography>
        <Typography variant="body1" sx={{ maxWidth: "700px", margin: "auto", opacity: "0.9", fontSize: "18px" }}>
          Manage, update, and securely store patient records with our easy-to-use system.
        </Typography>

        <Box sx={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <Paper elevation={4} sx={{ padding: "40px", width: "100%", maxWidth: "600px", borderRadius: "15px", textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "15px" }}>Start Managing Records</Typography>
            <Typography variant="body2" sx={{ opacity: "0.8", marginBottom: "20px" }}>
              Click below to access patient records and manage their details.
            </Typography>
            <Button component={Link} to="/dashboard" variant="contained" sx={{ backgroundColor: "#0d3b66", color: "white", borderRadius: "25px", fontSize: "16px", padding: "10px 25px", "&:hover": { backgroundColor: "#09234B" } }}>
              Go to Dashboard
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default PatientRecords;
