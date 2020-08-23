import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Footer from '../../components/Footer';

export default function Logon(){
  return(
    <div className="logonContainer">
      <section className="logonContent">
        <section>
          <h1>School Check</h1>
          <h2>Login</h2>
        </section>
        <form>
          <input type="email" placeholder="email" required/>
          <input type="password" placeholder="password" required />
          <button>Entrar</button>
          <Link to="/register">cadastre-se aqui</Link>
        </form>
      </section>

      <Footer />

    </div>
  )
}
