import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome, AiOutlinePoweroff, AiFillFileAdd } from 'react-icons/ai'
import './styles.scss';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/SmallButton';

export default function Alunos(){
  
  return(
      <div className="alunosContainer">
        <div className="alunosWrap">
          <Header>
            <Button>
              <Link to="/aluno/novo">
                <AiFillFileAdd size={20} color="#FFFFFF"/>
              </Link>
            </Button>

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

          <div className="alunosContent">
            
          </div>
        </div>
        <Footer />
      </div>
  )
}
