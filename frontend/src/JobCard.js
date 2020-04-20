import React, { useState, useContext } from 'react';
import './Card.css';

const JobCard = ({ job = {}, handleApply }) => {
  const { title, salary, equity } = job;

  let formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let formattedSalary = formatCurrency.format(salary).slice(0, -3);
  let formattedEquity = Math.round(equity * 100, 0) + '%';

  return (
    <div className="JobCard Card card">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{title}</span>
        </h6>
        <div>Salary: {formattedSalary}</div>
        <div>Equity: {formattedEquity}</div>
        <button
          className="btn btn-secondary font-weight-bold float-right"
          onClick={handleApply}
          disabled={job.state}
        >
          {job.state ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;