import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const contDetalhesViagem = styled.div`

`
export default function DetalhesViagens() {
  const history = useHistory() 

  const irParaHome = () => history.push('/')
    return (
      <contDetalhesViagem>
        <button onClick={irParaHome}>Voltar para Home</button>
      </contDetalhesViagem>
    );
  }