import React,{useState, useEffect, Profiler, } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Postagem = Styled.div`
    display:grid;
    grid-template-columns:repeat(12, 1fr);
    grid-template-rows:repeat(12, 1fr);
    background-color:#CEF6EC;
    align-self:center;
    width:25vw;height:90vh;
    margin:auto;margin-top:5vh;
    border:5px solid black;
        #Titulo{grid-column:3/12;grid-row:1;    color:#DF0174;}
        #Nome{grid-column:1/12;grid-row:2;  color:blue;}
        img{width:268px;height:240px;   grid-column:2/12;grid-row:3;    border:3px solid #DF0174;}
        span{grid-column:2/12;grid-row:6;}
        #check{grid-column:3/12;grid-row:10;}
        #cancel{grid-column:10/12;grid-row:10;}
        
        #botaoMatchs{grid-column:9/13;grid-row:12;height:30px;text-align:left;background-color:#A9F5A9;}#botaoMatchs > p{font-size:10px;} #coracao{font-size:9px; }
`
const ContainerPaginaMatchs = Styled.div`
    display:grid;
    grid-template-columns:repeat(12, 1fr);
    grid-template-rows:repeat(12, 1fr);
    background-color:#CEF6EC; 
    align-items:space-around;
        .listacurtidas > img{width:200px;height:200px;}
`
    



export default function Post(){
    let [nome, alterarNome] = useState('')
    let [foto, alterarFoto] = useState('')
    let [descricao, alterarDescricao] = useState('')
    let [objetoPost, alterarObjetoPost] = useState('')
    let [opcao, mudarOpcao] = useState(0)
    let [minhasCurtidas, adicionarCurtida] = useState([])
    let [paginaPrincipal, alterarValorPaginaPrincipal] = useState(true)
    let [paginaMatchs, alterarValorPaginaMatchs]  = useState(false)
    
    let obterMatchs = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel/matches'

    
    useEffect(() => {
        const lobo = 'https://img.elo7.com.br/product/zoom/1C33BFC/quadro-tela-animais-lobo-decoracao-telas-animal-0003-quadro-escritorios.jpg'


        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel/lobo',  {name:"lobo manso", photo:lobo, bio:'procuro alguem para ter uma vida selvagem comigo.Que goste de caçar, pescar e construir', id:'jdi2w8499jejs', choice:true},)
        
        
        axios.get(obterMatchs)
            .then(r =>  {
                alterarNome(r.data.matches[opcao].name)   
                alterarFoto(r.data.matches[opcao].photo)  
                alterarDescricao(r.data.matches[opcao].bio)  
                alterarObjetoPost(r.data.matches[opcao])
            })
    })
    
    const verMatchs = e => { 
        alterarValorPaginaMatchs(true) 
        alterarValorPaginaPrincipal(false)  }

    const avancar = e => mudarOpcao(opcao+1) 

    const curtir = e => {
            adicionarCurtida([... minhasCurtidas, objetoPost]) 
            console.log(minhasCurtidas)
            avancar()}
            

    if(paginaPrincipal){
    return(
    <Postagem>
        <h1 id="Titulo">Astro_Match</h1> <br/>
        <h2 id="Nome">{nome}</h2>
        <img src={foto} alt={nome}/>
        <span>{descricao}</span>
        <CheckCircleIcon id="check" color='primary' fontSize='large' onClick={ curtir}/>
        <CancelIcon id="cancel" color='secondary' fontSize='large' onClick={avancar}/> 
        <button 
        id="botaoMatchs" onClick={verMatchs}>  <p>Visualizar Matchs <FavoriteIcon id="coracao"/> </p> </button>
    </Postagem>)    }

    if(paginaMatchs){
        let lista = minhasCurtidas.map(l => <div className="listacurtidas" key={l}> <p>{l.name}</p> <img src={l.photo}/> <p>{l.bio}</p></div>)
    return(
        <ContainerPaginaMatchs>
            {lista}
        </ContainerPaginaMatchs>
        )
    }
}