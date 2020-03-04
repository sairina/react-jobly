import React, { useState } from 'react';

function UserForm() {

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [alert, setAlert] = useState(null);
  
  const handleSubmit = evt => {
    evt.preventDefault();
    
    try {
      // hit backend login api, store token in localStorage
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
          placeholder="Search.."
          value={formData.username}
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Search.."
          value={formData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
        {/* {alert ? <Alert /> : ''} */}
      </form>
    </div >
  );
}

export default UserForm;