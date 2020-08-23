import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlinePoweroff } from 'react-icons/ai'

import Header from '../../components/Header';
import Button from '../../components/SmallButton';
import MenuRelatorio from '../../components/MenuRelatorio';
import Footer from '../../components/Footer';

export default function Home(){
  return(
    <div className="homeContainer">
      <div className="homeContent">
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
        
        <MenuRelatorio>
          <li>
            <Link to="/alunos">Alunos</Link>
          </li>

          <li>
            <Link to="/professores">Professores</Link>
          </li>

          <li>
            <Link to="/classes">Classes</Link>
          </li>
        </MenuRelatorio>
      </div>
      <Footer />
  </div>
  )
}
