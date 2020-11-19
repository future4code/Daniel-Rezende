import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";


const FormCadastro = styled.form`
  text-align:center;
  width:100vw;height:100vh;
  background-color:aquamarine;
  position:relative;
    #home{align-self:left; position:absolute; left:0px;width:10vw;height:5vh;}
    #email{width:20em;height:2em;  font-size:20px; text-align:center;}
    #senha{width:20em;height:2em; font-size:20px; text-align:center;}
    #nome{width:10em;height:2em; font-size:20px; text-align:center;}
    label{font-size:50px;} button{font-size:36px;}
`
export default function Cadastro() {
  const history = useHistory()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const irParaHome = () => history.push('/')
  
  const cadastrar = () => {
    const body = {email:email, password:password}
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${name}/signup`,body)  .then(r => console('usuario '+ name +' castrado'))
  }

  const handlePassword = e => setPassword(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handleName = e => setName(e.target.value)
  console.log({name, email})
    return (
      
        
        <FormCadastro onSubmit={cadastrar}>
          
          <label htmlFor="name">Nome</label>   <br/>
          <input 
          type={"text"} name={"name"} 
          id={'nome'} onChange={handleName} required/>  
          <br/><br/><br/> 

          <label htmlFor={"email"}>E-mail</label>  <br/>
          <input type={"email"} name={"email"} id="email" onChange={handleEmail} required/>  <br/><br/><br/>
          
          <label htmlFor="Senha">Senha</label>   <br/>
          <input 
          type={"password"} name={"password"} 
          id={'senha'} onChange={handlePassword} required/>  
            <br/><br/><br/>
            <button onClick={cadastrar}>Cadastrar</button>
              
          
        
        </FormCadastro>
      
    );
  }