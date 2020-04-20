import React from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from "./default-logo.png";
import './Card.css';

function CompanyCard({ company = {} }) {
  const { name, description, handle } = company;
  return (
    <Link className="CompanyCard Card card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{name}</span>
          <img src={defaultLogo} alt={`${name} Logo`} />
        </h6>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;