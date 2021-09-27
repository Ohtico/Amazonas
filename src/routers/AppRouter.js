import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from '../components/Login';
import Registro from '../components/Registro';
import BarraP from '../components/BarraP';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { UserContext } from '../hooks/UserContext'


export default function AppRouter() {

  const [auth, setAuth] = useState(false)

    // const { login } = useContext (UserContext);
    // console.log(login);
  return (
    <Router>
      <Switch>
        <PublicRouter 
        exact path="/auth" 
        isAuthenticated={auth} 
        component={Login} 
        />
        <PublicRouter 
        exact path="/auth/registro" 
        isAuthenticated={auth} 
        component={Registro} 
        />
        
        <PublicRouter 
        exact path="/auth/inicio" 
        isAuthenticated={auth} 
        component={BarraP}  
        />

        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
}