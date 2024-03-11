import React from 'react';
export const Filter: React.FC<FilterProps>= ({filter,type,setFilter}) => {
  return (
  <input
            type="text"
            className="filter-input"
            placeholder={`Filter by ${type}...`}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />)
}