import React from 'react';
import './styles.scss';

export default function Header(props){
  return(
    <header>
     {props.children}
    </header>
  )
}
