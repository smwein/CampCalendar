import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FeaturedCamps from '../components/FeaturedCamps';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="my-4">Welcome to CampCalendar</h1>
        <p>Plan your kids' summer activities and camps easily.</p>
        <SearchBar />
        <FeaturedCamps />
      </div>
    </div>
  );
};

export default Homepage;
