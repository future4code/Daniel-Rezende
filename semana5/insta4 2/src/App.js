import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Post2 from './components/Post/Post';
import Post3 from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post2
          nomeUsuario={'elisangelo'}
          fotoUsuario={'https://i.picsum.photos/id/629/200/150.jpg?hmac=4k9NnOY7oHkdzP6No7U2ln191_8qG46AxYpG_QIK1cM'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post3
          nomeUsuario={'irlan'}
          fotoUsuario={'https://img.freepik.com/fotos-gratis/paisagem-prado-ensolarado_1112-134.jpg?size=626&ext=jpg&ga=GA1.2.1300302406.1602785117'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </div>
    );
  }
}

export default App;
