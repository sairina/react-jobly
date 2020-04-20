import React, { useState } from 'react';

function SearchBar({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    searchFor(searchTerm);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setSearchTerm(sData => ({
      ...sData,
      [name]: value
    }));
  };


  return (
    <div className="SearchBar mb-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="input-group flex-grow-1">
          <input className="form-control form-control-lg"
            name="search"
            type="text"
            placeholder="Search.."
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="input-group-append input-group-btn">
            <button className="btn btn-lg btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default SearchBar;