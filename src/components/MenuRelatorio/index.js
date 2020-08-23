import React from 'react';
import './styles.scss';

export default function MenuRelatorio({ title ,children }){
  return (
    <ul className="menuRelatorio">
      {children}
    </ul>
  )
}
