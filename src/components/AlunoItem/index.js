import React from 'react';

import './styles.css';

export default function AlunoItem({ matricula, nome, sexo, dataNascimento, cpf }){
  return (
    <li key={matricula} className="alunoItem">
      <div className="alunoTitle">
        <h1>{nome}</h1>
      </div>

      <div className="decriptionGroup">
        <strong>Matrícula: </strong>
        <span>{matricula}</span>
      </div>

      <div className="decriptionGroup">
        <strong>Sexo: </strong>
        <span>{sexo}</span>
      </div>

      <div className="decriptionGroup">
        <strong>Data de Nascimento: </strong>
        <span>{dataNascimento}</span>
      </div>

      <div className="decriptionGroup">
        <strong>CPF: </strong>
        <span>{cpf}</span>
      </div>

    </li>
  )
}