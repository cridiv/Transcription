import React from "react";
import { SpeechProvider } from "./context/SpeechContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import Generate from "./components/Generate";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <SpeechProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </SpeechProvider>
  );
};

export default App;
