import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { decode } from "jsonwebtoken";
import { FadeLoader } from "react-spinners";
import useLocalStorage from "./hooks";
import Navigation from "./Navigation";
import Routes from "./Routes";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";
import './App.css';

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // initialize TOKEN_STORAGE_ID to be used as key in localStorage
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  /** REMEMBER LOGIN STATUS:
   *  - store currentUser details in state upon login/registration
   *  - jwt verification handled by the backend
   */
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        let { username } = decode(token);
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
      } catch (err) {
        setCurrentUser(null);
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  const handleLogOut = () => {
    setCurrentUser(null);
    setToken(null);
  };

  if (!infoLoaded) {
    return (
    <div className="fade-loader-container d-flex align-items-center justify-content-center" style={{height: '75vh'}}>
      <FadeLoader color="#123abc"/>
    </div>
    );
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Navigation logout={handleLogOut}/>
        <Routes setToken={setToken} />
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

