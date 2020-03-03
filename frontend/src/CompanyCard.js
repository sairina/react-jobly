import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';

function CompanyCard(props) {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      let c = await JoblyApi.getCompany(props.company);
      setCompany({
        name: c.name,
        description: c.description,
        logo_url: c.logo_url
      });
    }
    getCompany();
  }, [props.company]);

  const pageContents = company ?
    <div className="CompanyCard-details">
      <h2>Company name: {company.name}</h2>
      <p>Company description: {company.description}</p>
      <img src={company.logo_url} alt={company.name} />
    </div>
    : "Loading...";

  return (
    <div className="CompanyCard">
      {pageContents}
    </div>
  );
}

export default CompanyCard;