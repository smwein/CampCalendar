import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">CampCalendar</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/camps">Camps</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
