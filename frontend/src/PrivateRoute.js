import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./UserContext";

function PrivateRoute({ exact, path, children }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
<<<<<<< HEAD
    return <Redirect to="/login" />;
=======
    return <Redirect to="/" />;
>>>>>>> 960c651198975465fe774249134a07a01e89a468
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
