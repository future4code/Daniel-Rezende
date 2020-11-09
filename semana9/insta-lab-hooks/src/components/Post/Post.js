import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  let [curtido, trocarEstadoCurtido] = useState(false)
  let [numeroCurtidas, mudarNumeroCurtidas] = useState(0)
  let [comentando, trocarEstadoComentando] = useState(false)
  let [numeroComentarios, mudarNumComentarios] = useState(0)
  let [comentarios, mudarComentarios] = useState([])

  const onClickCurtida = () => {
    if(curtido){
      trocarEstadoCurtido(!curtido)
      mudarNumeroCurtidas(numeroCurtidas - 1)
    }
    else{
      trocarEstadoCurtido(!curtido)
      mudarNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    trocarEstadoComentando(!comentando)
  };

  const enviarComentario = (c) => {
    const listaDecomentarios = [...comentarios, c]
    mudarComentarios(listaDecomentarios)
    trocarEstadoComentando(!comentando)
    mudarNumComentarios(numeroComentarios + 1)
  }

  
  const iconeCurtida = curtido?(iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = comentando?(
    <SecaoComentario enviarComentario={enviarComentario}/>)
    :(comentarios.map(c => <CommentContainer><p key={c}>{c}</p></CommentContainer>)
  ) 

    console.log(comentarios)
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>Daniel</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador     
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
       {caixaDeComentario} 
    </PostContainer>
  )
}

export default Post