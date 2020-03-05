import React, { useState, useContext } from 'react';
import UserContext from "./UserContext";
import JoblyApi from "./JoblyApi";

function Profile() {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  // const {username, first_name, last_name, email, photo_url} = currentUser;

  const [userForm, setUserForm] = useState(
    { 
      username: currentUser.username || "",
      first_name: "",
      last_name: "",
      email: "",
      photo_url: "",
      password: ""
    });

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let { first_name, last_name, email, photo_url } = userForm;
      let response = await JoblyApi.updateUser({first_name, last_name, email, photo_url});
    } catch (err) {
      // setAlert(err);
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserForm(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
    <h3>Profile</h3>
    <div className="card">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Username</label>
            <p className="form-control-plaintext">{userForm.username}</p>
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              name="first_name"
              className="form-control"
              value={userForm.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              name="last_name"
              className="form-control"
              value={userForm.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              className="form-control"
              value={userForm.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Photo URL</label>
            <input
              name="photo_url"
              className="form-control"
              value={userForm.photo_url}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm password to make changes:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={userForm.password}
              onChange={handleChange}
            />
          </div>

          {/* {userForm.errors.length ? (
            <Alert type="danger" messages={userForm.errors} />
          ) : null}

          {userForm.saveConfirmed ? (
            <Alert type="success" messages={["User updated successfully."]} />
          ) : null} */}

          <button
            className="btn btn-primary btn-block mt-4"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Profile;