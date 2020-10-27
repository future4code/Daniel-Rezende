import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerCadastro = styled.div`

  border:1px solid black;
  text-align:left;
  padding:30px 0px 0px 30px;
  width:20vw;height:15vh;
  position:absolute;
  right:40%;top:10%;
  button{
    background-color:black;
    color:white; font-size:24px;
    align-self:center;
    position:relative;
    margin-left:200px;
  }
`
class App extends Component{ 
  state = {
    email : "",
    name : "",
    areaCadastro: "true"
  }

  pegarNome = e => {
    this.setState({ name: e.target.value })
   }
 
  pegarEmail = e => {
    this.setState({email: e.target.value})
  }
  
  mudarPagina = e => {
    this.setState({areaCadastro:!this.state.areaCadastro})
  }
   
 render(){

if (this.state.areaCadastro){
  return (
    <>
     <button onClick={this.mudarPagina}>Ir para página de lista</button>
    
      <ContainerCadastro>
        <label>Nome</label>
        <input type="text" onChange={this.pegarNome} value={this.state.name}/><br/><br/>
        <label>E-mail</label>
        <input type="text" onChange={this.pegarEmail} value={this.state.email}/><br/><br/>
        <button>Salvar</button>
  
      </ContainerCadastro>
      
    </>
  );
}
else{return (
  <>
  <button onClick={this.mudarPagina}>Ir para página de de cadastro</button>
    
  </>
);}


  }
}
export default App;