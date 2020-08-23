import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Home from './pages/Home';
import Alunos from './pages/Alunos';
import NovoAluno from './pages/NovoAluno';
import Professores from './pages/Professores';
import NovoProfessor from './pages/NovoProfessor';
import Classes from './pages/Classes';
import Page404 from './pages/404';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/alunos" exact component={Alunos}/>
        <Route path="/aluno/novo" exact component={NovoAluno}/>
        <Route path="/professores" exact component={Professores}/>
        <Route path="/professor/novo" exact component={NovoProfessor}/>
        <Route path="/classes" exact component={Classes}/>
        <Route exact component={Page404}/>
      </Switch>
    </BrowserRouter>
  )
}
