import React from 'react';

const FilterBar = ({ filters, onChange, onFilter }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        name="movieTitle"
        placeholder="Titolo"
        value={filters.movieTitle}
        onChange={onChange}
      />
      <input
        type="text"
        name="cinema"
        placeholder="Cinema"
        value={filters.cinema}
        onChange={onChange}
      />
      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={onChange}
      />
      <button onClick={onFilter}>Applica</button>
    </div>
  );
};

export default FilterBar;