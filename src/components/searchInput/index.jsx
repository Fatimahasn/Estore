import React, { useState } from 'react';
import "./style.css";
const Search = ({ data, placeholder, onSearch }) => {
  // State to hold the search query and filtered data
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle search term change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter the data based on the search term
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);

    // If onSearch function is passed, call it with filtered data
    if (onSearch) {
      onSearch(filtered);
    }
  };

  // Function to clear search input
  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredData(data);
    if (onSearch) {
      onSearch(data);
    }
  }; 

  return (
    <div>
        <div className="d-flex">
            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input form-control"
            />
            <button onClick={handleClearSearch} className="clear-button">
                Search
            </button>
        </div>

      {searchTerm && <div className="search-results">
        {filteredData.length === 0 ? (
          <p>No results found</p>
        ) : (
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>}
    </div>
  );
};

export default Search;