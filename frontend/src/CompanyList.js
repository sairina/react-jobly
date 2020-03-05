import React, { useEffect, useState, useContext } from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import { v4 as uuid } from "uuid";
import UserContext from "./UserContext";
import { useHistory } from "react-router-dom";

function CompanyList() {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    async function getCompanies() {
      let response = await JoblyApi.getCompanies();
      setCompanies(response);
    }
    getCompanies();

  }, []);

  const filterBySearchObject = async (searchObject) => {
    let companies = await JoblyApi.getCompanies(searchObject);
    setCompanies(companies);
  }

  let pageDisplay =
    <div>
      <SearchBar filterBySearchObject={filterBySearchObject} />
      <div className="CardList-Companies">
        {companies.map(c => <CompanyCard key={uuid()} company={c} />)}
      </div>
    </div>

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      {!currentUser ? history.push('/') : pageDisplay}
    </div>
  );
}

export default CompanyList;