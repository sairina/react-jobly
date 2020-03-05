import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from "react-router-dom";
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import UserContext from "./UserContext";

function Company() {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

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

  const pageDisplay =
    <div>
      <h2>{companyObj.name}</h2>
      <p>{companyObj.description}</p>
      { jobCardsDisplay }
    </div>

  return (
    <div>
      {!currentUser ? history.push('/') : pageDisplay}
    </div>
  );
}

export default Company;