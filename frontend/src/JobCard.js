import React from 'react';

function JobCard({ job }) {

  return (
    <div className="CompanyCard">
      <div className="JobCard-details">
        <h2>{job.title}</h2>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
        <button>Apply</button>
      </div>
    </div>
  );
}

export default JobCard;