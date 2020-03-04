import React, { useState } from 'react';

function SearchBar({ filterBySearchObject }) {
  const [searchObject, setSearchObject] = useState({ search: "" });

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('searchObject is', searchObject)

    filterBySearchObject(searchObject);
    console.log('search term post', searchObject)
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setSearchObject(sData => ({
      ...sData,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search.."
          value={searchObject.search}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default SearchBar;