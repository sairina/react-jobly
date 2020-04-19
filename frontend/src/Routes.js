import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Companies from './Companies';
import Jobs from './Jobs';
import Company from './Company';
import Profile from './Profile';
import PrivateRoute from "./PrivateRoute";

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
        <Route exact path="/login">
          <Login setBackground={setBackground} setToken={setToken} />
        </Route>
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
      </Switch>
    </div>
  );
}

export default Routes;