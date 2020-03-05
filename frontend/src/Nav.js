import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({ loggedIn, logOut }) {
  console.log('loggedIn', loggedIn)

  let navBarUser = () => {
    return (
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink exact to='/companies'>Companies</NavLink></li>
        <li><NavLink exact to='/jobs'>Jobs</NavLink></li>
        <li><NavLink exact to='/profile'>Profile</NavLink></li>
        <li><NavLink exact to='/' onClick={logOut}>Log Out</NavLink></li>
      </ul>
    );
  };

  let navBar = () => {
    return (
      <ul className="Nav-navBar navbar-nav ml-auto">
        <li><NavLink exact to='/login' className="nav-item mr-4">Login</NavLink></li>
      </ul>
    );
  };

  return (
    <nav className="Nav navbar navbar-expand-lg">
    <NavLink exact to='/' className="navbar-brand">Jobly</NavLink>
      {loggedIn ? navBarUser() : navBar()}
    </nav>
  );
}

export default Nav;