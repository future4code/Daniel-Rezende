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
    #left{grid-area:1/1/12/6;display:grid;grid-gap:35px;}
    #left > div{background-color:black; }
    #right{grid-area:8/8/1/13;display:grid;grid-gap:37px;}
    #right > div{background-color:black;}
    img{width:40%;height:100%;}
`
export default function Viagens() {
  const history = useHistory() 

  const irParaHome = () => history.push('/')
    return (
      <ContainerViagens>
        
        <div id="left">
          <div> <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  </div>
          <div> <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  </div>
          <div> <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  </div>
          <div> <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/> </div>  </div>
        
        <div id="right">
          <div> <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  </div>
          <div> <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  </div>
          <div> <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  </div>
          <div> <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  </div> </div>
     
      </ContainerViagens>
    );
  }