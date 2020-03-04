import React, { useState } from 'react';

function SearchBar({ addSearchTerm }) {
  const INITIAL_STATE = { searchTerm: "" };
  const [searchTerm, setSearchTerm] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    addSearchTerm(searchTerm);
    setSearchTerm(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setSearchTerm(sData => ({
      ...sData,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="searchTerm"
          name="searchTerm"
          type="text"
          placeholder="Search.."
          value={searchTerm.searchTerm}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default SearchBar;