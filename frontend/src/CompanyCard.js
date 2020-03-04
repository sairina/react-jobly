import React from 'react';

function CompanyCard({ company }) {
  const pageContents = 
    <div className="CompanyCard-details">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <img src={company.logo_url} alt={company.name} />
    </div>;

  return (
    <div className="CompanyCard">
      {pageContents}
    </div>
  );
}

export default CompanyCard;