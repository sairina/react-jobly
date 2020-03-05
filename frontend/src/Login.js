import React, { useState } from 'react';
import JoblyApi from "./JoblyApi";

function Login({ setToken }) {

  const [formData, setFormData] = useState({ username: "", password: "" });
  // const [alert, setAlert] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let response = await JoblyApi.login(formData);
      console.log('response', response);
      setToken(response);
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


  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          type="text"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
        {/* {alert ? <Alert /> : ''} */}
      </form>
    </div >
  );
}

export default Login;