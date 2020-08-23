import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function HomeButtom(){
  return(
    <button>
       <Link to="/home">
        <AiFillHome size={20} color="#FFFFFF"/>
       </Link>
     </button>
  )
}
