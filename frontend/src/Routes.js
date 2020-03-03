import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/companies">
        <SearchBar />
        <CompanyList />
      </Route>
      <Route path="/companies/:company">
        {/* filter over JobCards*/}
        <JobCard />
      </Route>
      <Route path="/jobs">
        <SearchBar />
        {/* map over JobCards*/}
        <JobCard />
      </Route>
      <Route path="/login">
        <UserForm />
        <Alert />
      </Route>
      <Route path="/profile">
        <UserForm />
        <Alert />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;