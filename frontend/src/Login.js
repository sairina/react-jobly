import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";

function Login() {

  const { setToken } = useContext(UserContext);
  const [formData, setFormData] = useState(
    { 
      username: "", 
      password: "",
      first_name: "",
      last_name: "",
      email: "" 
    });

  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false); //toggleForm
  const [showRegistration, setShowRegistration] = useState(false); //toggleForm

  // const [alert, setAlert] = useState(null);

  async function handleLoginSubmit(evt) {
    evt.preventDefault();
    try {
      let { username, password } = formData;
      let response = await JoblyApi.login({username, password});
      setToken(response);
      history.push("/companies");
    } catch (err) {
      // setAlert(err);
    }
  };

  async function handleRegistrationSubmit(evt) {
    evt.preventDefault();
    try {
      let response = await JoblyApi.register(formData);
      setToken(response);
      history.push("/companies");
    } catch (err) {
      // setAlert(err);
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  
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
        {/* {alert ? <Alert /> : ''} */}
      </form>
    );
  }

  return (
    <div className="Login">
      {showLogin ? makeLogin() : null}
      {showRegistration ? makeRegistration() : null}
      <button onClick={handleLogin}>Login</button>  
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Login;