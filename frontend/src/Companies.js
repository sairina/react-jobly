import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import { v4 as uuid } from "uuid";
import UserContext from "./UserContext";

function Companies() {
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

  return (
    <div className="Companies col-md-8 offset-md-2">
      {!currentUser ? history.push('/') : 'pageDisplay'}
    </div>
  );
}

export default Companies;