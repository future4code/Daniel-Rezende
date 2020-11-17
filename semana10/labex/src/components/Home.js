import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory() 

  const irParaLogin = () => history.push("/login")
  const irParaCadastro = () => history.push("/cadastro") 
  const irParaViagens = () => history.push("/Viagens/ver")
    return (
      <>
        <h1>aqui é a home</h1>
        <button onClick={irParaCadastro}>Cadastrar para viagem</button>
        <button onClick={irParaLogin}>login</button>
        <button onClick={irParaViagens}>viagens disponiveis</button>
      </>
    );
  }