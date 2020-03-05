import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ loggedIn }) {
  const loggedInHome = () => {
    return (
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Jobly</h1>
          <p className="lead">All the jobs in one, convenient place.</p>
          <h2>Welcome Back!</h2>
        </div>
    );
  }

  const loggedOutHome = () => {
    return (
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Jobly</h1>
          <p className="lead">All the jobs in one, convenient place.</p>
          <Link to="/login" className="btn btn-primary font-weight-bold">Log in</Link>
        </div>
    );
  }

  return (
    <div className="Home">
      {loggedIn ? loggedInHome() : loggedOutHome()}
    </div>
  );
}

export default Home;