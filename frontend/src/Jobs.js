import React, { useState, useEffect, useContext } from 'react';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  
  const searchJobs = async (search) => {
    let jobsResponse = await JoblyApi.getJobs(search);
    setJobs(jobsResponse);
  }

  useEffect(() => {
    searchJobs();
  }, []);

  const apply = async idx => {
    let jobId = jobs[idx].id;
    let message = await JoblyApi.applyToJob(jobId);
    setJobs(j => j.map(job => 
      job.id === jobId ? { ...job, state: message} : job
    ));
  }

  if (!jobs.length) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{height: '65vh'}}>
        Loading jobs...
      </div>
    );
  }

  return (
    <div className="Jobs col-md-8 offset-md-2">
      <SearchBar searchFor={searchJobs} />
      {jobs.length ? (
        <div className="JobList">
          {jobs.map((jobData, idx) => (
            <JobCard
              job={jobData}
              key={jobData.id}
              idx={idx}
              handleApply={() => apply(idx)}
            />
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default Jobs;