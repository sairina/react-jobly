import React, { useState } from 'react';
import SearchBar from './SearchBar';

function JobList(){
  const [foundItems, setFoundItems] = useState([]);

  const addSearchTerm = () => {
    setFoundItems(item => [
      ...foundItems,
      item
    ])
  }

  return(
    <div>
      <SearchBar addSearchTerm={addSearchTerm}/>
    </div>
    // <JobCard />
  );
}

export default JobList;