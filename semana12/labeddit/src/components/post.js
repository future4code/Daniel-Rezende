import React from 'react';
import styled from 'styled-components'

const Main = styled.main`
position:absolute;
top:0;left:0;
width:100%;height:300%;
background-color:#A9E2F3;
    div{width:70%;font-size:32px;position:relative;margin:auto; margin-top:40px;    
    background-color:#D8F6CE;border:5px solid black;}
    #postagem{height:25%;position:relative;}
      p{width:100%;position:absolute;}
      #cabecalho{height:7%;border-bottom:1px solid black;top:0;}
      #texto{height:83%;top:16%;}
      #reacoes{height:10%;border-top:1px solid black;bottom:0;}
    #meuComent{position:relative;height:10%;width:70%; margin:auto;
    margin-top:100px;}
      #digComent{width:100%;height:80%;font-size:32px;background-color:#E3F6CE;}
      #enviarComent{position:absolute; right:0; font-size:32px;}
    h1{font-size:80px;}
    #comentario{height:10%;}
`
function Comentario(props) {
    return(
        <div id='comentario'>
            <p>{props.resposta}</p>
        </div>
    )
}
export default function Post(props){
    return(
        <Main>
            <div id='postagem'>
                <p id='cabecalho'>
                    {props.nome} {props.titulo}
                </p>
                <p id='texto'></p>
                <p id='reacoes'></p>
            </div>
            <h1>Poste um comentário:</h1>
            <div id='meuComent'>
                <input type='text' id='digComent'/>
                <button id='enviarComent'>Enviar comentario</button>
            </div>
                
            
            <h1>Respostas:</h1>
            <Comentario resposta='hello world!!!'/>
        </Main>
    )
}