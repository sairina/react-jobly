import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { decode } from "jsonwebtoken";
import { ClipLoader } from "react-spinners";
import useLocalStorage from "./hooks";
// import BackgroundImage from "./BackgroundImage";
import Navigation from "./Navigation";
import Routes from "./Routes";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";
import backgroundImg from './georgie-cobbs-unsplash.jpg';
import "./App.css";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [showBackground, setShowBackground] = useState(true);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
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
    setShowBackground(true);
  };

  if (!infoLoaded) {
    return <ClipLoader style={{textAlign: "center"}} size={150} color="#123abc" />;
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser, showBackground, setShowBackground }}>
      <div className="App">
        { showBackground && backgroundLoaded ? 
          <>
            <Navigation logout={handleLogOut}/>
            <Routes setToken={setToken} />
          </> : null}
        <img
          className='bg'
          style={backgroundLoaded ? {display: 'block'} : {display: 'none'}}
          src={backgroundImg}
          onLoad={() => setBackgroundLoaded(true)}
        />
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );

  // return (
  //   <div>
  //     {backgroundLoaded ? 'HAS LOADED' : 'Loading'}
  //     <img
  //       className='bg'
  //       style={backgroundLoaded ? {} : { display: 'none' }}
  //       src={backgroundImg}
  //       onLoad={() => setBackgroundLoaded(true)}
  //     />
  //   </div>
  // );

  // return (
  //   <BrowserRouter>
  //     <UserContext.Provider value={{ currentUser, setCurrentUser, showBackground, setShowBackground }}>
  //     <div className="App">
  //       { showBackground && backgroundLoaded ? <BackgroundImage/> : null }
  //       <Navigation logout={handleLogOut}/>
  //       <Routes setToken={setToken} />
  //     </div>
  //     </UserContext.Provider>
  //   </BrowserRouter>
  // );
}

export default App;

