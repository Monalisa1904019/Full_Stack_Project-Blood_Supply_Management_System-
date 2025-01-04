import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import bloodBankImage from "../images/blood bank.jpg";

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Blood Supply System
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-light" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-light" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-light" to="/donate-blood">
                  Donate Blood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-light" to="/request-blood">
                  Request Blood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-light" to="/blood-stock">
                  Blood Stock
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-outline-light" onClick={() => alert("Logged out!")}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Body */}
      <main className="main-body">
        <div className="container d-flex justify-content-between align-items-center">
          <img 
            src={bloodBankImage}
            alt="Blood Bank"
            className="img-fluid main-image"
          />
          <div className="text-content">
            <h1 className="mt-4">Welcome to the Blood Supply Management System</h1>
            <p className="mt-3">
              Our platform is dedicated to bridging the gap between blood donors and recipients.
              Whether you wish to donate blood, request it in times of need, or check blood stock
              availability, we are here to help. Together, we can save lives.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer bg-primary text-white text-center py-5">
        <div className="container">
          <p>Blood Supply System © 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
