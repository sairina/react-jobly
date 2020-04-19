import React from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
// import Alert from './Alert';
>>>>>>> 960c651198975465fe774249134a07a01e89a468
import Home from './Home';
import Register from './Register';
import Login from './Login';
import PrivateRoute from "./PrivateRoute";
import Companies from './Companies';
import Jobs from './Jobs';
import Company from './Company';
import Profile from './Profile';
import PrivateRoute from "./PrivateRoute";

<<<<<<< HEAD
function Routes({setBackground, setToken}) {
  return (
    <div className="pt-5">
      <Switch>
        <Route exact path="/">
          <Home setBackground={setBackground}/>
        </Route>
        <Route exact path="/register">
          <Register setBackground={setBackground} setToken={setToken} />
        </Route>
=======
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
>>>>>>> 960c651198975465fe774249134a07a01e89a468
        <Route exact path="/login">
          <Login setBackground={setBackground} setToken={setToken} />
        </Route>
<<<<<<< HEAD
        <PrivateRoute exact path="/companies">
          <Companies />
        </PrivateRoute>
        <PrivateRoute path="/companies/:handle">
          <Company />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <Jobs />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
=======
        <Route exact path="/">
          <Home loggedIn={loggedIn} />
        </Route>
>>>>>>> 960c651198975465fe774249134a07a01e89a468
      </Switch>
    </div>
  );
}

export default Routes;