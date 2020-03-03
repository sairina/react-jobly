import React from 'react';
import CompanyCard from './CompanyCard';

function CompanyList(){
  return(
    <h2>
      Search bar
      Company cards for each company
      <CompanyCard company="anderson-arias-and-morrow" />
    </h2>
    // <SearchBar />
    
  );
}

export default CompanyList;