import React, { useState, useContext } from 'react';
import userContext from "./UserContext";
import JoblyApi from './JoblyApi';

function JobCard({ job }) {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const [applied, setApplied] = useState(false);

  let applyButtonText;

  const handleApply = async () => {
    try {
      let response = await JoblyApi.apply(job.id, currentUser.username);
      applyButtonText = response.message;
      setApplied(true);
      console.log(response)
    } catch (err) {
      console.log('ERROR');
    }
  }
  
  //TODO: FIX APPLY BUTTON TEXT

  return (
    <div className="CompanyCard">
      <div className="JobCard-details">
        <h2>{job.title}</h2>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
        <button onClick={handleApply}>
          {applyButtonText ? applyButtonText : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;