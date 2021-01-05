import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Post2 from './components/Post/Post';
import Post3 from './components/Post/Post';

class App extends React.Component {
   
  state = {
    posts:[
      {
      nomeUsuario:'paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
      },
      {
      nomeUsuario: 'elisangelo',
      fotoUsuario:'https://i.picsum.photos/id/629/200/150.jpg?hmac=4k9NnOY7oHkdzP6No7U2ln191_8qG46AxYpG_QIK1cM',
      fotoPost:'https://picsum.photos/200/151'
      },
      {
        nomeUsuario:'irlan',
        fotoUsuario:'https://img.freepik.com/fotos-gratis/paisagem-prado-ensolarado_1112-134.jpg?size=626&ext=jpg&ga=GA1.2.1300302406.1602785117',
        fotoPost:'https://picsum.photos/200/152'
      }
    ]
  }
  render() {
    const listaDePosts = this.state.posts.map((postss) =>{
      return (
        <div className={'app-container'}>
          {postss.nomeUsuario} - {postss.fotoUsuario} - {postss.fotoPost}
        </div>
      );
    })
    return(
    <Post>{listaDePosts}</Post>
    )
  }
}

export default App;
