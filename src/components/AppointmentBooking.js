import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, MenuItem, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../aboutusback.png";

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    doctor: "",
  });

  const doctors = ["Dr. John Doe", "Dr. Sarah Smith", "Dr. James Wilson", "Dr. Emily Brown"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.time}`);
    setFormData({ name: "", email: "", date: "", time: "", doctor: "" });
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", margin: 0 }}>
      {/* Header (Copied from Home Page) */}
      <Box sx={{ background: "linear-gradient(to right, #2c5364, #0f2027)", padding: "10px 0" }}>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" gap="40px">
              <Button component={Link} to="/" sx={{ color: "white", fontWeight: "bold", fontSize: "18px", letterSpacing: "1px" }}>Home</Button>
              <Button component={Link} to="/about" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>About Us</Button>
              <Button component={Link} to="/services" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>Services</Button>
              <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: "#0d3b66", color: "white", borderRadius: "25px", padding: "10px 25px", fontSize: "16px", fontWeight: "bold", "&:hover": { backgroundColor: "#09234B" } }}>Contact</Button>
            </Box>
            <Box display="flex" gap="20px">
              <Button component={Link} to="/login" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>Login</Button>
              <Button component={Link} to="/signup" variant="contained" sx={{ backgroundColor: "#0d3b66", color: "white", borderRadius: "25px", padding: "10px 25px", fontSize: "16px", fontWeight: "bold", "&:hover": { backgroundColor: "#09234B" } }}>Signup</Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Appointment Booking Section */}
      <Box
        sx={{
          minHeight: "80vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 0",
          marginBottom: "-75px",
        }}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Paper
                elevation={3}
                sx={{
                  padding: "40px",
                  borderRadius: "12px",
                  textAlign: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Book an Appointment
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, marginBottom: "20px" }}>
                  Schedule your appointment with ease.
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required sx={{ marginBottom: "15px" }} />
                  <TextField fullWidth label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required sx={{ marginBottom: "15px" }} />
                  <TextField fullWidth label="Appointment Date" type="date" name="date" InputLabelProps={{ shrink: true }} value={formData.date} onChange={handleChange} required sx={{ marginBottom: "15px" }} />
                  <TextField fullWidth label="Appointment Time" type="time" name="time" InputLabelProps={{ shrink: true }} value={formData.time} onChange={handleChange} required sx={{ marginBottom: "15px" }} />
                  <TextField select fullWidth label="Select Doctor" name="doctor" value={formData.doctor} onChange={handleChange} required sx={{ marginBottom: "20px" }}>
                    {doctors.map((doc, index) => (
                      <MenuItem key={index} value={doc}>{doc}</MenuItem>
                    ))}
                  </TextField>
                  <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: "12px", fontSize: "16px", fontWeight: "bold", borderRadius: "25px", backgroundColor: "#1976D2", "&:hover": { backgroundColor: "#1565C0" } }}>
                    Book Appointment
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer (Copied from Home Page) */}
      <Box sx={{ backgroundColor: "#1976D2", color: "white", textAlign: "center", padding: "20px", marginTop: "50px" }}>
        <Typography variant="body2">© 2025 Healthify. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default AppointmentBooking;
