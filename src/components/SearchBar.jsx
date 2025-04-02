import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search books..."
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar; 