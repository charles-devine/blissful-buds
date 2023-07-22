import React, { useState } from 'react';
import './FacettedSearch.css';

const FacettedSearch = ({ categories, strains, prices, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterToggle = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="facetted-search-container">
      <div className="checkbox-column">
        {categories && categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedFilters.includes(category)}
              onChange={() => handleFilterToggle(category)}
            />
            {category.charAt(0) + category.slice(1)}
          </label>
        ))}
      </div>
      {strains && (
        <div className="checkbox-column">
          {strains.map((strain) => (
            <label key={strain}>
              <input
                type="checkbox"
                checked={selectedFilters.includes(strain)}
                onChange={() => handleFilterToggle(strain)}
              />
              {strain}
            </label>
          ))}
        </div>
      )}
      {prices && (
        <div className="checkbox-column">
          {prices.map((price) => (
            <label key={price} style={{ fontSize: '13px' }}>
            <input
                type="checkbox"
                checked={selectedFilters.includes(price)}
                onChange={() => handleFilterToggle(price)}
              />
              {price}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FacettedSearch;
