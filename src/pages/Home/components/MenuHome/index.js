import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function MenuHome(){
  return (
    <div className="home">
      <ul className="menuHome">
        <li>
          <Link to="Alunos">Alunos</Link>
        </li>

        <li>
          <Link to="Alunos">Professores</Link>
        </li>

        <li>
          <Link to="Alunos">Classes</Link>
        </li>
      </ul>
    </div>
  )
}