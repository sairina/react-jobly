import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

function Company() {
  const { company } = useParams();
  const [companyObj, setCompanyObj] = useState({});

  useEffect(() => {
    async function getCompany() {
      let response = await JoblyApi.getCompany(company);
      setCompanyObj(response);
    }
    getCompany();
  }, [company]);

  const jobCardsDisplay = companyObj.jobs ? 
    companyObj.jobs.map(j => <JobCard job={j} key={j.id} />) 
    : '';

  return (
    <div>
      <div>
        <h2>{companyObj.name}</h2>
        <p>{companyObj.description}</p>
      </div>
      {jobCardsDisplay}
    </div>
  );
}

export default Company;