import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
// import { decode } from "jsonwebtoken";
import './App.css';
import useLocalStorage from './hooks';
import Nav from "./Nav";
import Routes from "./Routes";
// import JoblyApi from "./JoblyApi";
// import UserContext from "./UserContext";

function App() {
  const [token, setToken] = useLocalStorage("_token");
  const [loggedIn, setLoggedIn] = useState(false);
  // console.log('token', token)

  useEffect(() => {
    let validToken = token ? true : false;
    setLoggedIn(validToken);
  }, [token])

  const logOut = () => {
    setToken(null);
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {/* <UserContext.Provider > */}
      <div className="App">
        <Nav loggedIn={loggedIn} logOut={logOut}/>
        <Routes loggedIn={loggedIn} setToken={setToken} />
      </div>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;

