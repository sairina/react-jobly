import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route exact path="/companies">
        <SearchBar />
        <CompanyList />
      </Route>
      <Route exact path="/companies/:company">
        {/* filter over JobCards*/}
        <JobCard />
      </Route>
      <Route exact path="/jobs">
        <SearchBar />
        {/* map over JobCards*/}
        <JobCard />
      </Route>
      <Route exact path="/login">
        <UserForm />
        <Alert />
      </Route>
      <Route exact path="/profile">
        <UserForm />
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