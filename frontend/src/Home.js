import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import './Home.css';

const Home = () => {
  const { currentUser } = useContext(UserContext);
  return (

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3 text-right">Jobly</h1>
        <p className="lead text-right">All the jobs in one, convenient place.</p>
        {currentUser ? (
          <h2 className="text-right">Welcome back{currentUser.first_name ? `, ${currentUser.first_name}.` : '!'}</h2>
        ) : (
            <div>
              <Link className="btn btn-info font-weight-bold float-right" to="/register">
                Get Started
                  </Link>
            </div>
          )}
      </div>
    </div>
  );
}

export default Home;