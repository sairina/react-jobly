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
      <form onSubmit={handleSubmit} className="SearchBar-form form-inline">
        <input className="form-control form-control-lg flex-grow-1"
          id="search"
          name="search"
          type="text"
          placeholder="Search.."
          value={searchObject.search}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-lrg btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default SearchBar;