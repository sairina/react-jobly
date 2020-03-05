import React, { useState } from 'react';

function SearchBar({ filterBySearchObject }) {
  const [searchObject, setSearchObject] = useState({ search: "" });

  const handleSubmit = evt => {
    evt.preventDefault();
    filterBySearchObject(searchObject);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setSearchObject(sData => ({
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
            value={searchObject.search}
            onChange={handleChange}
          />
          <div className="input-group-btn">
            <button className="btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default SearchBar;