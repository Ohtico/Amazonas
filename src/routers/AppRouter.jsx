import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Registro from "../components/Registro";
import { Productos } from "../components/Productos";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Detalle from "../components/Detalle";


import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Listar } from "../actions/actionProduct";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
// import { loginSincrono } from "../actions/actionLogin";
//import { LoadTaks } from "../helpers/LoadTaks";

export default function AppRouter() {
  const [checkin, setCheckin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        dispatch(Listar("Computadores"));
      } else {
        setIsLoggedIn(false);
      }
      setCheckin(false);
    });
  }, []);

  if (checkin) {
    return <h1>espere...</h1>;
  }

  return (
    <Router>
      <Switch>
        <PublicRouter
          exact
          path="/auth/login"
          isAuthenticated={isLoggedIn}
          component={Login}
        />

        <PublicRouter
          exact
          path="/auth/registro"
          isAuthenticated={isLoggedIn}
          component={Registro}
        />

        <PrivateRouter
          exact
          path="/productos"
          isAuthenticated={isLoggedIn}
          component={Productos}
        />

        <PrivateRouter
          exact
          path="/detalle"
          isAuthenticated={isLoggedIn}
          component={Detalle}
        />

        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
}
