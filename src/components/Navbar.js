import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #2E5D77, #7BA9B3)",
        boxShadow: "none",
        padding: "10px 0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          Healthify
        </Typography>

        {/* Center: Navigation Links */}
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Typography component={Link} to="/" sx={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>
            Home
          </Typography>
          <Typography component={Link} to="/about" sx={{ color: "white", textDecoration: "none" }}>
            About Us
          </Typography>
          <Typography component={Link} to="/services" sx={{ color: "white", textDecoration: "none" }}>
            Services
          </Typography>
        </Box>

        {/* Right: Contact Button */}
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          sx={{
            backgroundColor: "#0D2C4B",
            borderRadius: "20px",
            padding: "8px 20px",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#0B243B" },
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
