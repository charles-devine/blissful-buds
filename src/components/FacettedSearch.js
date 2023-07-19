import React, { useState } from 'react';
import './FacettedSearch.css'; // Import the CSS file for styling

const FacettedSearch = ({ categories, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterToggle = (filter) => {
    // Check if the filter is already selected, and add or remove it accordingly
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="facetted-search-container">
      <div className="checkbox-column">
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedFilters.includes(category)}
              onChange={() => handleFilterToggle(category)}
            />
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FacettedSearch;
