import React, { useContext } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import UserContext from "./UserContext";
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
import Alert from './Alert';
import Home from './Home';
import Profile from './Profile';

function Routes({ loggedIn }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div className="pt-5">
      <Switch>
        <Route exact path="/companies">
          <CompanyList />
        </Route>
        <Route exact path="/companies/:company">
          <Company />
        </Route>
        <Route exact path="/jobs">
          <JobList />
        </Route>
        <Route exact path="/profile">
          { currentUser ? <Profile /> : <Redirect to="/" /> }
          {/* <div>TEST</div> */}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home loggedIn={loggedIn} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;