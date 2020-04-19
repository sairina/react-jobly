import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import JoblyApi from './JoblyApi';
import { v4 as uuid } from "uuid";

<<<<<<< HEAD:frontend/src/Companies.js
function Companies() {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

=======
function CompanyList() {
>>>>>>> 960c651198975465fe774249134a07a01e89a468:frontend/src/CompanyList.js
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
<<<<<<< HEAD:frontend/src/Companies.js
    <div className="Companies col-md-8 offset-md-2">
      {!currentUser ? history.push('/') : pageDisplay}
=======
    <div className="CompanyList col-md-8 offset-md-2">
      <div>
        <SearchBar filterBySearchObject={filterBySearchObject} />
        <div className="CardList-Companies">
          {companies.map(c => <CompanyCard key={uuid()} company={c} />)}
        </div>
      </div>
>>>>>>> 960c651198975465fe774249134a07a01e89a468:frontend/src/CompanyList.js
    </div>
  );
}

export default Companies;