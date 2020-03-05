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

  // <div class="input-group mb-3">
  //   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  //     <div class="input-group-append">
  //       <span class="input-group-text" id="basic-addon2">@example.com</span>
  //     </div>
  // </div>

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
          <div className="input-group-append">
            <button type="submit" className="input-group-text btn btn-lrg btn-primary">Submit</button>
          </div>
      </form>
    </div>
      )
    }
export default SearchBar;