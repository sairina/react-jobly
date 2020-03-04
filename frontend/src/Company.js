import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from './JoblyApi';

function Company(props) {
  const { company } = useParams();
  // console.log(useParams());
  const [companyObj, setCompanyObj] = useState({});

  useEffect(() => {
    async function getCompany() {
      let response = await JoblyApi.getCompany(company);
      console.log('response', response);
      setCompanyObj(response);
    }
    getCompany();
  }, []);

  return (
    <div>
      <h2>{companyObj.name}</h2>
      <p>{companyObj.description}</p>
    </div>
    // <JobCards />
  );
}

export default Company;