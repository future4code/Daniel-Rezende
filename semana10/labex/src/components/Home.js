import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const ContainerHome = styled.div`
  width:100vw;height:100vh;
  background-color:aquamarine;
  text-align:center; 
  text-justify:auto;
    button{width:12em; font-size:40px;  background-color:orange;
      margin-top:200px;}
`
export default function Home() {
  const history = useHistory() 

  const irParaLogin = () => history.push("/login")
  const irParaCadastro = () => history.push("/cadastro") 
  const irParaViagens = () => history.push("/Viagens/ver")

  
    return (
      <ContainerHome> 
        <button onClick={irParaCadastro}>Cadastrar para viagem</button>   <br/>
        <button onClick={irParaLogin}>login</button>  <br/>
        <button onClick={irParaViagens}>viagens disponiveis</button>  <br/>
      </ContainerHome>
    );
  }