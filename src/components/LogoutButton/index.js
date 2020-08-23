import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePoweroff } from 'react-icons/ai';

export default function LogoutButton(){
  return(
    <button>
      <Link to="/">
        <AiOutlinePoweroff size={20} color="#FFFFFF"/>
      </Link>
    </button>
  )
}
