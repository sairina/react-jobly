import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
// import Alert from './Alert';
import Home from './Home';
import Profile from './Profile';
import PrivateRoute from "./PrivateRoute";

function Routes({ loggedIn }) {
  return (
    <div className="pt-5">
      <Switch>
        <PrivateRoute exact path="/companies">
          <CompanyList />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:company">
          <Company />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <JobList />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home loggedIn={loggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;