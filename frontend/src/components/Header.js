import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Ensure you have a logo image in the assets folder

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="CampCalendar" />
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
            <li className="nav-item"><Link to="/camps" className="nav-link text-white">Camps</Link></li>
            <li className="nav-item"><Link to="/calendar" className="nav-link text-white">Calendar</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link text-white">About Us</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;