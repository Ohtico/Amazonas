import React from "react";
import { Route, Redirect } from "react-router-dom";
import BarraP from "../components/BarraP";

function PrivateRouter({ isAuthenticated, component: Component, ...rest }) {
  return (
    <>
      <BarraP />
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          )
        }
      />
    </>
  );
}

export default PrivateRouter;
