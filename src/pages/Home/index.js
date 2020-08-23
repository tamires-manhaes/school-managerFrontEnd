import React from 'react';
import './styles.scss';

import MenuHome from './components/MenuHome';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home(){
  return(
    <div className="homeContainer">
      <div className="homeContent">
      <Header />
      <MenuHome />  
      </div>
      <Footer />
    </div>
  )
}