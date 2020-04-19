import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Alert from "./Alert";
import JoblyApi from "./JoblyApi";

function Login({ setBackground, setToken }) {
  const history = useHistory();
  const [loginData, setLoginData] = useState(
    {
      username: "",
      password: "",
      errors: []
    });

<<<<<<< HEAD
  /** AUTHENTICATION:
   *  - generate token from backend and save in localStorage
   */
  const handleSubmit = async evt => {
    evt.preventDefault();
    let token;
=======
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false); //toggleForm
  const [showRegistration, setShowRegistration] = useState(false); //toggleForm


  async function handleLoginSubmit(evt) {
    evt.preventDefault();
    try {
      let { username, password } = formData;
      let response = await JoblyApi.login({username, password});
      setToken(response);
      history.push("/companies");
    } catch (err) {
      // setAlert(err);
      console.log('ERROR')
    }
  };
>>>>>>> 960c651198975465fe774249134a07a01e89a468

    try {
<<<<<<< HEAD
      token = await JoblyApi.login({
        username: loginData.username,
        password: loginData.password
      });
    } catch (errors) {
      return setLoginData(loginData => ({ ...loginData, errors }));
=======
      let response = await JoblyApi.register(formData);
      setToken(response);
      history.push("/companies");
    } catch (err) {
      // setAlert(err);
      console.log('ERROR')
>>>>>>> 960c651198975465fe774249134a07a01e89a468
    }

    setToken(token);
    setBackground(false);
    history.push("/jobs");
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setLoginData(loginData => ({
      ...loginData,
      [name]: value
    }));
  };
<<<<<<< HEAD
=======
  
  const handleLogin = () => {
    setShowLogin(true);
    setShowRegistration(false);
  };
  
  const handleRegistration = () => {
    setShowRegistration(true);
    setShowLogin(false);
  };

  const makeLogin = () => {
    return (
      <form onSubmit={handleLoginSubmit}>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
        {/* {alert ? <Alert /> : ''} */}
      </form>
    );
  };

  const makeRegistration = () => {
    return (
      <form onSubmit={handleRegistrationSubmit}>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          id="first_name"
          name="first_name"
          type="text"
          placeholder="First name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <input
          id="last_name"
          name="last_name"
          type="text"
          placeholder="Last name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
>>>>>>> 960c651198975465fe774249134a07a01e89a468

  return (
    <div className="Login">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={loginData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </div>
              {loginData.errors.length ? (
                <Alert type="danger" messages={loginData.errors} />
              ) : null}
              <Link className="btn btn-outline-primary float-left" to="/register">
                Create Account
              </Link>
              <button
                type="submit"
                className="btn btn-primary float-right"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;