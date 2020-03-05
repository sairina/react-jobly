import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { decode } from "jsonwebtoken";
import './App.css';
import useLocalStorage from './hooks';
import Nav from "./Nav";
import Routes from "./Routes";
import JoblyApi from './JoblyApi';
import UserContext from "./UserContext";

function App() {
  const [token, setToken] = useLocalStorage("_token");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let validToken = token ? true : false;
    setLoggedIn(validToken);
    if(validToken) {
      const getUser = async () => {
        let { username } = decode(token);
        let response = await JoblyApi.getCurrentUser(username); 
        setCurrentUser(response);
      }
      getUser();
    }
  }, [token])

  const logOut = () => {
    setToken(null);
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser, setToken}}>
      <div className="App">
        <Nav loggedIn={loggedIn} logOut={logOut}/>
        <Routes loggedIn={loggedIn} />
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

