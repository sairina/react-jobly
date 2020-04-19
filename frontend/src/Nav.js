import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({ loggedIn, logOut }) {

  let navBarUser = () => {
    return (
      <ul className="Nav-navBar navbar-nav ml-auto">
        <li className="nav-item mr-4"><NavLink exact to='/companies' className="nav-link">Companies</NavLink></li>
        <li className="nav-item mr-4"><NavLink exact to='/jobs' className="nav-link">Jobs</NavLink></li>
        <li className="nav-item mr-4"><NavLink exact to='/profile' className="nav-link">Profile</NavLink></li>
        <li className="nav-item mr-4"><NavLink exact to='/' onClick={logOut} className="nav-link">Log Out</NavLink></li>
      </ul>
    );
  };

  let navBar = () => {
    return (
      <ul className="Nav-navBar navbar-nav ml-auto">
        <li className="nav-item mr-4"><NavLink exact to='/login' className="nav-link">Login</NavLink></li>
      </ul>
    );
  };

  return (
    <nav className="Nav navbar navbar-expand-md">
      <NavLink exact to='/' className="navbar-brand">Jobly</NavLink>
      {loggedIn ? navBarUser() : navBar()}
    </nav>
  );
}

export default Nav;