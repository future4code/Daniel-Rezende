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

const ListaPessoas = styled.div`
    border:5px solid black;
    text-align:center; align-content:center;
    width:40vw;height:95vh;
    margin-left:auto;margin-right:auto;
`

class App extends Component{ 
  state = {
    email : "",
    name : "",
    cadastrados: "",
    areaCadastro: "true"
  }

  pegarNome = e => {
    this.setState({ name: e.target.value })
   }
 
  pegarEmail = e => {
    this.setState({email: e.target.value})
  }
  
  componentDidMount = () => {
    this.pegarLista();
  };

  pegarLista = e => {
  

  //Capturando usuarios
    axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers:{
        Authorization: "daniel-henrique-dumont"
      }
    })

    .then(response =>{
      this.setState({cadastrados:response.data})
      
    })
  
    .catch(error => {
    console.log(error.message);
   });
}

  //Adicionando Usuarios
  criarLista = e => {
    const body = {
      name:this.state.name,
      email:this.state.email
    }
    axios
    .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
      headers:{
        Authorization: "daniel-henrique-dumont"
      }
    })
  }
  //Deletar usuario

  deletarUsuario = (users) => {
    axios
    .delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/',{
      headers:{
        Authorization: "daniel-henrique-dumont"
      }
    })
  }

  mudarPagina = e => {
    this.setState({areaCadastro:!this.state.areaCadastro})
  }
   
  
 render(){
  console.log(this.state.cadastrados)
if (this.state.areaCadastro){
  return (
    <>
     <button onClick={this.mudarPagina}>Ir para página de lista</button>
    
      <ContainerCadastro>
        <label>Nome</label>
        <input type="text" onChange={this.pegarNome} value={this.state.name}/><br/><br/>
        <label>E-mail</label>
        <input type="email" onChange={this.pegarEmail} value={this.state.email}/><br/><br/>
        <button onClick={this.criarLista}>Salvar</button>                                     
  
      </ContainerCadastro>
      
    </>
  );
}
else{return (
  <>
  <button onClick={this.mudarPagina}>Ir para página de de cadastro</button>
    <ListaPessoas>

        <h1>Lista de pessoas Aqui!</h1>
        
        <ul>
        {this.state.cadastrados.map(users => <li key={users}>{users.name}
        <button onClick={() => this.deletarUsuario(users)}type="button">Remover</button>
        </li> )}
        </ul>

    </ListaPessoas>
    
  </>
);}


  }
}
export default App;