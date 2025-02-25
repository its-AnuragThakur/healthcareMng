import React, { useState } from "react";
import { Container, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const InClinicAppointments = () => {
  // Mock data for completed appointments
  const [appointments] = useState([
    {
      id: 1,
      name: "John Doe",
      doctor: "Dr. Smith - Cardiologist",
      date: "2025-02-06",
      time: "10:00 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      doctor: "Dr. Patel - Orthopedic",
      date: "2025-02-07",
      time: "11:30 AM",
    },
    {
      id: 3,
      name: "Michael Lee",
      doctor: "Dr. Lee - Neurologist",
      date: "2025-02-08",
      time: "02:00 PM",
    },
  ]);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header - Matches Home & About Us */}
      <AppBar position="static" sx={{ background: "linear-gradient(to right, #2c5364, #0f2027)", padding: "10px 0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          <Button component={Link} to="/" sx={{ color: "white", fontWeight: "bold", fontSize: "18px", letterSpacing: "1px" }}>Home</Button>
          <Button component={Link} to="/about" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>About Us</Button>
          <Button component={Link} to="/services" sx={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>Services</Button>
          <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: "#0d3b66", color: "white", borderRadius: "25px", padding: "10px 25px", fontSize: "16px", fontWeight: "bold", "&:hover": { backgroundColor: "#09234B" } }}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Container sx={{ padding: "60px 0", flex: 1 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          In-Clinic Appointments
        </Typography>

        {/* Table of completed in-clinic appointments */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Doctor</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Time</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.name}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Footer - Moved to the bottom */}
      <Box sx={{ backgroundColor: "#1976D2", color: "white", textAlign: "center", padding: "20px" }}>
        <Typography variant="body2">© 2025 Healthify. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default InClinicAppointments;
