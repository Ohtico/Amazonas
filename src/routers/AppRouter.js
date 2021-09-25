import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from '../components/Login';
import Registro from '../components/Registro';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';


export default function AppRouter() {

  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <Switch>
        <PublicRouter exact path="/auth" isAuthenticated={auth} component={Login} />
        <PublicRouter exact path="/auth/registro" isAuthenticated={auth} component={Registro} />
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
}