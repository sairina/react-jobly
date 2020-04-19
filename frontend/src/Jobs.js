import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

<<<<<<< HEAD:frontend/src/Jobs.js
function Jobs() {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

=======
function JobList() {
>>>>>>> 960c651198975465fe774249134a07a01e89a468:frontend/src/JobList.js
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


<<<<<<< HEAD:frontend/src/Jobs.js
  const pageDisplay =
    <div>
      <SearchBar filterBySearchObject={filterBySearchObject} />
      <div className="Jobs-Jobs">
        {allJobs}
      </div>
    </div>

  return (
    <div className="Jobs col-md-8 offset-md-2">
      {!currentUser ? history.push('/') : pageDisplay}
=======
  const allJobs = jobs.map(j => <JobCard job={j} key={j.id} />)

  return (
    <div className="JobList col-md-8 offset-md-2">
      <div>
        <SearchBar filterBySearchObject={filterBySearchObject} />
        <div className="JobList-Jobs">
          {allJobs}
        </div>
      </div>
>>>>>>> 960c651198975465fe774249134a07a01e89a468:frontend/src/JobList.js
    </div>
  );
}

export default Jobs;