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
<<<<<<< HEAD
    const getCurrentUser = async () => {
      try {
        let { username } = decode(token);
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
      } catch (err) {
        setCurrentUser(null);
      }
      setInfoLoaded(true);
=======
    if (localStorage.getItem("_token")) {
      const getUser = async () => {
        let { username } = decode(token);
        let response = await JoblyApi.getCurrentUser(username);
        setCurrentUser(response);
      }
      setLoggedIn(token);
      getUser();
>>>>>>> 960c651198975465fe774249134a07a01e89a468
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
<<<<<<< HEAD
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
=======
      <UserContext.Provider value={{ currentUser, setCurrentUser, setToken }}>
        <div className="App">
          <Nav loggedIn={loggedIn} logOut={logOut} />
          <Routes loggedIn={loggedIn} />
        </div>
>>>>>>> 960c651198975465fe774249134a07a01e89a468
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

