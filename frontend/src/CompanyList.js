import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
// import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import {v4 as uuid} from "uuid";

function CompanyList() {

  const [companies, setCompanies] = useState([]);
  // const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    async function getAllCompanies() {
      let response = await JoblyApi.getAllCompanies();
      setCompanies(response);
    }
    getAllCompanies();
  }, []);

  console.log(companies);

  // const addSearchTerm = () => {
  //   setFoundItems(item => [
  //     ...foundItems,
  //     item
  //   ])
  // }
  // debugger;

  // let searchCompanies = foundItems.map(f => <CompanyCard key={uuid()}company={f} />)
  let allCompanies = companies.map(c => <CompanyCard key={uuid()} company={c} />)

  // console.log(allCompanies);

  // const companiesDisplay = foundItems.length > 0 ?  searchCompanies: allCompanies;
  
   return (
    <div>
      {/* <SearchBar addSearchTerm={addSearchTerm} /> */}
      {allCompanies}
    </div>
  );
}

export default CompanyList;