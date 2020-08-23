import React from 'react';
import './styles.scss';

export default function FormCadastro({ handleSubmit }){
  return(
    <form onSubmit={handleSubmit}>
      <div className="inputGroup">
        <label>Nome: </label>
        <input type="text" placeholder="Nome" required/>
      </div>

      <div className="inputGroup">
        <label>Data de Nascimento: </label>
        <input type="text" placeholder="dd/mm/aaaa" required />
      </div>

      <div className="inputGroup">
        <label>CPF: </label>
        <input type="text" placeholder="999.999.999-99" required/>
      </div>

      <div className="inputGroup">
        <label>Sexo: </label>
        <select>
          <option >Selecione</option>
          <option value="Feminino">Feminino</option>
          <option valeu="Masculino">Masculino</option>
        </select>
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  )
}
