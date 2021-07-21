import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory() 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const irParaHome = () => history.push('/')
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    
    
  }, [history]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/detalhesDaViagem");
      })
      .catch((err) => {
        console.log(err);
      });
  }
 
    return (
      <>
        <button onClick={irParaHome}>Voltar para Home</button>
        <p>Login</p>
        <input value={email} onChange={handleEmail} />
        <input value={password} onChange={handlePassword} />
        <button onClick={login}>Fazer login</button>
      </>
    );
  }
