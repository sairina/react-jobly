import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import {v4 as uuid} from "uuid";

function CompanyList() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getAllCompanies() {
      let response = await JoblyApi.getAllCompanies();
      // console.log('response', response);
      setCompanies(response);
    }
    getAllCompanies();
  }, []);

  const filterBySearchObject = async (searchObject) => {
    console.log(searchObject)
    let companies = await JoblyApi.getAllCompanies(searchObject);
    setCompanies(companies);
    console.log('companies after search', companies);
  }

  // let searchCompanies = foundItems.map(f => <CompanyCard key={uuid()}company={f} />)
  let allCompanies = companies.map(c => <CompanyCard key={uuid()} company={c} />)

  // const companiesDisplay = foundItems.length > 0 ?  searchCompanies: allCompanies;
  
   return (
    <div>
      <SearchBar filterBySearchObject={filterBySearchObject} />
      {allCompanies}
    </div>
  );
}

export default CompanyList;