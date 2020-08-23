import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Register(){
  return (
    <div className="registerContainer">
      <div className="registerContent">
        <Header />
        <div className="registerWrap">
          <section>
            <h1>Cadastro</h1>

            <Link className="back-link" to="/">
              <FiArrowLeft size={18} color="#E02041" />
              Voltar para login 
            </Link>
          </section>

          <form>
            <input 
                type="text" 
                placeholder="Nome" 
                // value={name}
                // onChange={e => setName(e.target.value)}
                // required
            />

            <input 
                type="email" 
                placeholder="Email" 
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                // required
            />

            <input 
                type="password" 
                placeholder="Password" 
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                // required
            />    

            <div className="changeDataInput">
              <span>Pode alterar dados?</span>
              <label for="changeData">Sim</label>
              <input type="radio" value="true" name="changeData" id="changeData"/>
              <label for="changeData">Não</label>
              <input type="radio" value="false" name="changeData" id="changeData"/>
            </div>

            <button className="button" type="submit">Cadastrar</button>
          </form>

        </div>

      </div>

      <Footer />
    </div>
  )
}
