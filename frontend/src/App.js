import React from 'react';
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
  console.log('token',token)

  return (
    <BrowserRouter>
      {/* <UserContext.Provider > */}
        <div className="App">
          <Nav />
          <Routes setToken={setToken} />
        </div>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;

