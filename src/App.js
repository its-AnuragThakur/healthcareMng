import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import OurServices from "./components/OurServices"; 
import AboutUs from "./components/AboutUs";// Import OurServices.js
import InClinicAppointment from './components/InClinicAppointment';
import Signup from './components/Signup';
import Hospitals from "./components/Hospitals";
import AppointmentBooking from "./components/AppointmentBooking";
import Contact from "./components/Contact";
import PatientRecords from "./components/PatientRecords";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/in-clinic-appointment" element={<InClinicAppointment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book-appointment" element={<AppointmentBooking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/records" element={<PatientRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
