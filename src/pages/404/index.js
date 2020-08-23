import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Page404(){
  return (
    <div className="page404">
      <h1>
        Página não encontrada!
      </h1>
      <Link to="/home">Voltar a Home</Link>
    </div>
  )
}
