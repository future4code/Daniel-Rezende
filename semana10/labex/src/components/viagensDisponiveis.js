import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const ContainerViagens = styled.div`
  display:grid;
  grid-template-columns:repeat(12, 1fr);
  grid-template-rows:repeat(12, 1fr);
  width:100vw;
  height:100vh;
  background-color:purple;
    #left{grid-area:1/1/12/6;   display:grid;  grid-gap:30px;}
    #left > div{background-color:gray;border:2px solid black; }
    #right{grid-area:8/8/1/13;display:grid;grid-gap:30px;}
    #right > div{background-color:gray;border:2px solid black;}
    img{width:40%;height:100%;padding-right:1000px;}
    button{background-color:black;color:white;position:relative; margin-right:0px;}
`
export default function Viagens() {
  const history = useHistory() 

  const irParaHome = () => history.push('/')
    return (
      <ContainerViagens>
        
        <div id="left">
          <div> 
            <button>Cadastrar</button>
            <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  
          </div>
          <div> 
            <button>Cadastrar</button>
            <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  
            </div>
          <div>
             <button>Cadastrar</button>
             <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  
             </div>
          <div>
             <button>Cadastrar</button>
             <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/> 
             </div>  </div>
        
        <div id="right">
          <div>
            <button>Cadastrar</button> 
            <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  
            </div>
          <div> 
            <button>Cadastrar</button>
            <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  
            </div>
          <div> 
            <button>Cadastrar</button>
            <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  
            </div>
          <div> 
            <button>Cadastrar</button>
            <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  
            </div> </div>
     
      </ContainerViagens>
    );
  }