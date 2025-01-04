import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Login from "./components/Login"; // Example login component
// import Signup from "./components/Signup"; // Example signup component
// import DonateBlood from "./components/DonateBlood"; // Example donate blood component
// import RequestBlood from "./components/RequestBlood"; // Example request blood component
// import BloodStock from "./components/BloodStock"; // Example blood stock component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donate-blood" element={<DonateBlood />} />
        <Route path="/request-blood" element={<RequestBlood />} />
        <Route path="/blood-stock" element={<BloodStock />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
