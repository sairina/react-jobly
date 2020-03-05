import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import { v4 as uuid } from "uuid";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let response = await JoblyApi.getCompanies();
      setCompanies(response);
    }
    getCompanies();

  }, []);

  const filterBySearchObject = async (searchObject) => {
    let companies = await JoblyApi.getCompanies(searchObject);
    setCompanies(companies);
  }

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <div>
        <SearchBar filterBySearchObject={filterBySearchObject} />
        <div className="CardList-Companies">
          {companies.map(c => <CompanyCard key={uuid()} company={c} />)}
        </div>
      </div>
    </div>
  );
}

export default CompanyList;