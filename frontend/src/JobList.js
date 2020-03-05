import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import UserContext from "./UserContext";

function JobList() {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      let response = await JoblyApi.getJobs();
      setJobs(response);
    }
    getJobs();
  }, []);

  const filterBySearchObject = async (searchObject) => {
    let jobs = await JoblyApi.getJobs(searchObject);
    setJobs(jobs);
  }

  const allJobs = jobs.map(j => <JobCard job={j} key={j.id} />)

  const pageDisplay =
    <div>
      <SearchBar filterBySearchObject={filterBySearchObject} />
      <div className="JobList-Jobs">
        {allJobs}
      </div>
    </div>

  return (
    <div className="JobList col-md-8 offset-md-2">
      {!currentUser ? history.push('/') : pageDisplay}
    </div>
  );
}

export default JobList;