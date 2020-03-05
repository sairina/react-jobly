import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
import Alert from './Alert';
import Home from './Home';

function Routes({ setToken }) {
  return (
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
      <Route exact path="/login">
        <Login setToken={setToken} />
        {/* <Alert /> */}
      </Route>
      <Route exact path="/profile">
        <Login />
        <Alert />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;