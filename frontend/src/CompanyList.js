import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import { v4 as uuid } from "uuid";

function CompanyList() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getAllCompanies() {
      let response = await JoblyApi.getAllCompanies();
      setCompanies(response);
    }
    getAllCompanies();
  }, []);

  const filterBySearchObject = async (searchObject) => {
    let companies = await JoblyApi.getAllCompanies(searchObject);
    setCompanies(companies);
  }

  let allCompanies = companies.map(c => <CompanyCard key={uuid()} company={c} />)
  
   return (
    <div>
      <SearchBar filterBySearchObject={filterBySearchObject} />
      {allCompanies}
    </div>
  );
}

export default CompanyList;