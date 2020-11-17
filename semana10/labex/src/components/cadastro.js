import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Cadastro() {
  const history = useHistory()
  
  const irParaHome = () => history.push('/')
    return (
      <>
        <button onClick={irParaHome}>Voltar para Home</button>
      </>
    );
  }