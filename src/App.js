import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import './App.css';
import Login from "./Login/Login"
import Form from "./Form/Form"

function App() {

  const[isAuth, setAuth] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:9000/auth")
    .then(res => {
      console.log(res)
      setAuth(true)
    })
    .catch(err => { 
      console.log(err)
      setAuth(false)})
  },[])

  console.log(isAuth)

  return (
    <div className="app-root">
      <Switch>
        <Route path="/" exact component={Login} />
        {isAuth ? <Route path="/form" component={Form} /> : <Redirect to="/" /> }
      </Switch>
    </div>
  );
}

export default App;
