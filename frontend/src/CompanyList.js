import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import {v4 as uuid} from "uuid";

function CompanyList() {

  const [companies, setCompanies] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    async function getAllCompanies() {
      let response = await JoblyApi.getAllCompanies();
      console.log('response', response);
      setCompanies(response);
    }
    getAllCompanies();
  }, []);

  //this doesn't work yet; we want this function to update the state so that it populates
  //company objects that match search term. need to figure out how to pass search term into 
  //find all function
  const filterBySearchTerm = () => {
    setFoundItems(item => [
      ...foundItems,
      item
    ])
  }

  console.log('foundItems is', foundItems);

  let searchCompanies = foundItems.map(f => <CompanyCard key={uuid()}company={f} />)
  // let allCompanies = companies.map(c => <CompanyCard key={uuid()} company={c} />)

  // console.log(allCompanies);

  // const companiesDisplay = foundItems.length > 0 ?  searchCompanies: allCompanies;
  
   return (
    <div>
      <SearchBar filterBySearchTerm={filterBySearchTerm} />
      {/* {allCompanies} */}
    </div>
  );
}

export default CompanyList;