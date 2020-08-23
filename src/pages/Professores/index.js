import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome, AiOutlinePoweroff, AiFillFileAdd } from 'react-icons/ai'
import './styles.scss';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/SmallButton';

export default function Professores(){
  
  return(
    <div className="professorContainer">
      <div className="professorWrap">
        <Header>
          <Button>
            <Link to="/professor/novo">
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

        <div className="professorContent">
          
        </div>
      </div>
      <Footer />
    </div>
  )
}
