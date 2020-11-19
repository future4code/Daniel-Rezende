import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const ContainerViagens = styled.div`
  display:grid;
  grid-template-columns:repeat(24, 1fr);
  grid-template-rows:repeat(24, 1fr);
  width:100vw;
  height:100vh;
  background-color:purple;
    #left{grid-area:1/2/24/12;   display:grid;  grid-gap:30px;}
    #left > div{background-color:gray;border:2px solid black;position:relative;}
    #right{grid-area:1/14/24/24;display:grid;grid-gap:30px;}
    #right > div{background-color:gray;border:2px solid black;position:relative;}
    img{position:absolute; width:50%;height:100%; left:0px;top:0px;}
    button{position:absolute;background-color:black;color:white;
    height:25%; font-size:20px;  bottom:0px;right:0px;}
    p{position:absolute;left:51%;top:0px; font-size:40px;}
`
export default function Viagens() {
  const history = useHistory() 

  const home = () => history.push('/')
  const cadastro = () => history.push('/cadastro')
    return (
      <ContainerViagens>
        
        <div id="left">
          <div> 
             <button onClick={cadastro}>Cadastrar</button>
             <p>Marte</p>
             <img src={'https://i0.statig.com.br/bancodeimagens/6w/uy/ep/6wuyep32ihcnwln027arx61gl.jpg'}/>  
          </div>
          <div> 
             <button onClick={cadastro}>Cadastrar</button>
             <p>Lua</p>
             <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0R4P8ev0AaGMswLsNb6DyFA0En20SzgxmHw&usqp=CAU'}/>  
            </div>
          <div>
             <button onClick={cadastro}>Cadastrar</button>
             <p>Urano</p>
             <img src={'https://hypescience.com/wp-content/uploads/2020/03/urano.jpg'}/>  
             </div>
          <div>
             <button onClick={cadastro}>Cadastrar</button>
             <p>Venus</p>
             <img src={'https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_900/https://www.iquilibrio.com/blog/wp-content/uploads/2017/02/venus-na-astrologia.jpg'}/> 
             </div>  </div>
        
        <div id="right">
          <div>
             <button onClick={cadastro}>Cadastrar</button> 
             <p>Netuno</p>
             <img src={'https://static.todamateria.com.br/upload/55/2c/552c1951b24cd-planeta-netuno-medium.jpg'}/>  
            </div>
          <div> 
             <button onClick={cadastro}>Cadastrar</button>
             <p>vy Cannis majoris</p>
             <img src={'https://i.pinimg.com/originals/eb/59/f7/eb59f7b5f170e85ee7cf7d2c9d45af55.jpg'}/>  
            </div>
          <div> 
             <button onClick={cadastro}>Cadastrar</button>
             <p>Sol</p>
             <img src={'https://static.natgeo.pt/files/styles/image_3200/public/6594.jpg'}/>  
            </div>
          <div> 
             <button onClick={cadastro}>Cadastrar</button>
             <p>Plutão</p>
             <img src={'https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg'}/>  
            </div> </div>
     
      </ContainerViagens>
    );
  }