import React from 'react';
import { NavLink } from 'react-router-dom';

function CompanyCard({ company }) {

  return (
    <div className="CompanyCard">
      <NavLink exact to={`/companies/${company.handle}`}>
        <div className="CompanyCard-details">
          <h6 className="card-title d-flex justify-content-between">
            <span className="text-capitalize">{company.name}</span>
            <img src={company.logo_url} alt={company.name} />
          </h6>
          <p>{company.description}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default CompanyCard;