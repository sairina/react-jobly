import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navigation.css';
import UserContext from "./UserContext";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  const loggedInNav = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/companies">
          Companies
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/jobs">
          Jobs
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/" onClick={logout}>
          Log out
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        Jobly
      </Link>
      {currentUser && loggedInNav}
    </nav>
  );
}

export default Navigation;