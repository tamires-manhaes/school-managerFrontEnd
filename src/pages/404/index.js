import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Page404(){
  return (
    <div className="page404">
      <h1>
        Page not found!
      </h1>
      <Link to="/">Voltar a Home</Link>
    </div>
  )
}