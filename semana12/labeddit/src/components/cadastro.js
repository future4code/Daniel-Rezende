import React,{useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

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

export default function Cadastro(){
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  
  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const handleUsername = e => setUsername(e.target.value)

  const cadastrar = e => {
    e.preventDefault()
    const body = {
      email,
     password,
     username
   }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body)
    .then(resolve => {
      localStorage.setItem('token', resolve.data.token)
    })
    .catch(error => console.log(error))  
  }
  return(
    <Main>
        <h1>Cadastre-se</h1>
      <form>

        <input 
          type={'text'}
          placeholder={'Nome'} 
          value={username}
          required
          onChange={handleUsername}>
        </input>
        <input 
          type={'email'}
          placeholder={'E-mail'} 
          value={email}
          required
          onChange={handleEmail}>
        </input>
        <input 
          type={'password'}
          placeholder={'Senha'} 
          value={password}
          required
          onChange={handlePassword}>
        </input>

        <button onClick={cadastrar}>Cadastrar</button> 
        <a href='/login'>Já tem conta?</a> 
  
      </form>
    </Main>
  )
}
