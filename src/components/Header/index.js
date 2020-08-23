import React from 'react';
import './styles.css';

import HomeButton from '../../components/HomeButton';
import LogoutButton from '../../components/LogoutButton';

export default function Header(){
  return(
    <header>
      <HomeButton />

      <LogoutButton />
    </header>
  )
}
