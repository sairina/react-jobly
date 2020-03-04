import React from 'react';
import { NavLink } from 'react-router-dom';

function CompanyCard({ company }) {

  return (
    <div className="CompanyCard">
      <NavLink exact to={`/companies/${company.handle}`}>
        <div className="CompanyCard-details">
          <h2>{company.name}</h2>
          <p>{company.description}</p>
          <img src={company.logo_url} alt={company.name} />
        </div>
      </NavLink>
    </div>
  );
}

export default CompanyCard;