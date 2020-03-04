import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

function JobList(){
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    async function getAllJobs() {
      let response = await JoblyApi.getAllJobs();
      setJobs(response);
    }
    getAllJobs();
  }, []);

  const filterBySearchObject = async (searchObject) => {
    let jobs = await JoblyApi.getAllJobs(searchObject);
    setJobs(jobs);
  }

  let allJobs = jobs.map(j => <JobCard job={j} key={j.id} />)

  return(
    <div>
      <SearchBar filterBySearchObject={filterBySearchObject}/>
      {allJobs}
    </div>
  );
}

export default JobList;