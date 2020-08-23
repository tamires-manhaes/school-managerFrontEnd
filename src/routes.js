import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Home from './pages/Home';
import Register from './pages/Register';
import Page404 from './pages/404';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Logon}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route exact component={Page404}/>
      </Switch>
    </BrowserRouter>
  )
}
