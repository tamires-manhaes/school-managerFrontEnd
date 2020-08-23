import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome, AiOutlinePoweroff } from 'react-icons/ai'
import './styles.scss';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/SmallButton';
import FormCadastro from '../../components/FormCadastro';

export default function NovoProfessor(){
  function handleSubmit(event){
    event.preventDefault();
    alert('submit form!');
  }
  return(
    <div className="professorContainer">
      <div className="professorWrap">
        <Header> 
          <Button>
            <Link to="/home">
              <AiFillHome size={20} color="#FFFFFF"/>
            </Link>
          </Button>

          <Button>
            <Link to="/">
              <AiOutlinePoweroff size={20} color="#FFFFFF"/>
            </Link>
          </Button>
        </Header>

        <div className="professorContent">
          <h1>Cadastro</h1>
          <h2>Novo Aluno</h2>
          <FormCadastro 
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
