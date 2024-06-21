import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="my-4">
      <input type="text" className="form-control" placeholder="Search for camps..." />
    </div>
  );
};

export default SearchBar;