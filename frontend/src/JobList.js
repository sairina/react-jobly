import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

function JobList() {
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

  let allJobs = jobs.map(j => <JobCard job={j} key={j.id} />)

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchBar filterBySearchObject={filterBySearchObject} />
      <div className="JobList-Jobs">
        {allJobs}
      </div>
    </div>
  );
}

export default JobList;