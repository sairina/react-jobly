import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        <Link to="/login" className="btn btn-primary font-weight-bold">Log in</Link>
      </div>
    </div>
  );
}

export default Home;