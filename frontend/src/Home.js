import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UserContext from "./UserContext";

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Home">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {currentUser ? (
          <h2>Welcome back, {currentUser.first_name}!</h2>
        ) : (
            <div>
              <div>
                <Link className="btn btn-primary font-weight-bold col-3 mb-2" to="/register">
                  Get Started
                  </Link>
              </div>
              <div>
                <Link className="btn btn-login font-weight-bold col-3 mb-2" to="/login">
                  Login
                  </Link>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Home;