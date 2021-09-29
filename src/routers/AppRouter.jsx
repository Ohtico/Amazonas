import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from '../components/Login';
import Registro from '../components/Registro';
import BarraP from '../components/BarraP';
import { Productos } from '../components/Productos';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {Listar} from '../actions/actionProduct'
import { useDispatch } from "react-redux";
// import { loginSincrono } from "../actions/actionLogin";
//import { LoadTaks } from "../helpers/LoadTaks";



export default function AppRouter() {


  //const dispatch = useDispatch()
  // const [checkin, setCheckin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const auth = getAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth,(user) =>{
      if(user?.uid){
        setIsLoggedIn(true)
        dispatch(Listar('Computadores'))
      }else{
        setIsLoggedIn(false)
      }
    })
  }, [])


  return (
    <Router>
      <Switch>
        <PublicRouter
          exact path="/auth/login"
          isAuthenticated={isLoggedIn}
          component={Login}
        />

        <PublicRouter
          exact path="/auth/registro"
          isAuthenticated={isLoggedIn}
          component={Registro}
        />

        <PrivateRouter
          exact path="/"
          isAuthenticated={isLoggedIn}
          component={Productos}
        />

        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
}
