import React from 'react';
import { NavLink } from 'react-router-dom';

function CompanyCard({ company }) {
  const pageContents = 
    <div className="CompanyCard-details">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <img src={company.logo_url} alt={company.name} />
    </div>;

  return (
    <div className="CompanyCard">
      <NavLink exact to={`/companies/${company.handle}`}>
        {pageContents}
      </NavLink>
    </div>
  );
}

export default CompanyCard;