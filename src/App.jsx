import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import api from "./service/api";

import './App.css'

function App(){

  const[input, setInput]= useState('');

  async function mostrarValor(){
    if(input==='')  {
      alert('Digite um CEP')
      return
    }

    try {
      const response = await api.get(`${input}/json/`)
      console.log(response.data)
    } catch (Error) {
      alert('Error!')
    }
  }

  return(
    <>
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text"
           placeholder="Digite seu CEP"
           value={input} 
           onChange={(e)=>{setInput(e.target.value)}}/>
        <button className="buttonSearch" onClick={mostrarValor}><FiSearch size={25} color="#fff" /></button>
      </div>


      <main className="main">
          <h2>CEP: 45829023</h2>
          <span>Rua das flores</span>
          <span>Complemento: Perto de algum lugar</span>
          <span>Vila da Mata</span>
          <span>Recife-PE</span>
      </main>
    </div>
    </>
  )
}

export default App