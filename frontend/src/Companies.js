import React, { useEffect, useState, useContext } from 'react';
import JoblyApi from './JoblyApi';
import SearchBar from './SearchBar';
import CompanyCard from './CompanyCard';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  const searchCompanies = async (search) => {
    let companies = await JoblyApi.getCompanies(search);
    setCompanies(companies);
  }

  useEffect(() => {
    searchCompanies();
  }, []);


  if (!companies.length) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{height: '65vh'}}>
        Loading companies...
      </div>
    );
  }

  return (
    <div className="Companies col-md-8 offset-md-2">
      <SearchBar searchFor={searchCompanies} />
      {companies.length ? (
        <div className="JobList">
          {companies.map((companyData, idx) => (
            <CompanyCard
              company={companyData}
              key={companyData.handle}
            />
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default Companies;