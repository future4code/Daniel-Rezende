import React from 'react';
import styled from 'styled-components'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const Main = styled.main`
position:absolute;
top:0;left:0;
background-color:rgb(206, 230, 230);
    div{position:relative; width:80vw;height:50vh;margin:auto;}
    #postar{width:100%;height:90%;font-size:40px;background-color:#E3F6CE;}
    #botaoPostar{position:absolute;bottom:0;right:0;font-size:24px;}
    
    .post{position:relative;border:5px solid black; 
    width:25vw;height:40vh;margin:10px;display:inline-block;
    text-align:center;margin:60px;}
    p{width:100% ;position:relative;font-size:30px;margin:auto;}
    #nome{height:10%;border-bottom:5px solid black;}
    #texto{height:70%;}
    #reacoes{height:20%;border-top:5px solid black;}
    #like{position: absolute;width:10%;height:100%; left:0px;}
    #deslike{position: absolute;width:10%;height:100%; left:15%;}
    #detalhes{position: absolute;width:40%;height:45%;right:0;bottom:12px;font-size:20px;background-color:#819FF7;}
`
function Feed(props){
    return(
        
    <main className='post'>
        <p id='nome'>{props.nome}</p>
        <p id='texto'>{props.texto}</p>
        <p id='reacoes'>
          <ThumbUpIcon id='like' color='primary'/>
          <ThumbDownAltIcon id='deslike' color='secondary'/>
          <button id='detalhes'>Ver Detalhes</button>
        </p>
    </main>
    )
    
}

export default function Feeds(){
    return(
        <Main>
            
            <div>
                <input type='text' id='postar'/>
                <button id='botaoPostar'>postar</button>
            </div>
                
          
            <Feed nome='daniel henrique' texto='um texto aleatorio'/>
            <Feed nome='joana albuquerque' texto='um texto aleatorio'/>
            <Feed nome='angelo tavares' texto='um texto aleatorio'/>
            <Feed nome='irlan macaréu' texto='um texto aleatorio'/> 
            <Feed nome='irlan macaréu' texto='um texto aleatorio'/>
            <Feed nome='irlan macaréu' texto='um texto aleatorio'/>
            
              
        </Main>
    )
}