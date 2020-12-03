import React from 'react';
import styled from 'styled-components'

const Main = styled.main`
  position:absolute;
  top:0;left:0;
  background-color:rgb(206, 230, 230);
  width:100vw; height:100vh;
  text-align: center;justify-items: center;
    h1{font-size:100px;}
    form{width:20%;height:30%;margin:auto;}
    input{width:100%;height:20%;font-size:1.8em;text-align: center; margin-top:8vh;background-color: greenyellow;}
    button{width:50%;height:20%;margin-top:30px;font-size:32px;
    background-color:#819FF7;}
    a{margin-left:20px; font-size:20px;}
`

export default function Login(){
   
    const logar = () => alert('logado com sucesso')
    return(
    <Main>
        <h1>Logar</h1>
      <form onSubmit={logar}>
        <input type={'email'}placeholder={'E-mail'}></input>
        <input type={'password'}placeholder={'Senha'}></input>
        <button>Logar</button>
        <a href='/'>Não tem cadastro?</a>
      </form>
    </Main>
    )
}