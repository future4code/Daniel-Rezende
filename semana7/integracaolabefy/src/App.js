import React,{Component} from 'react'
import axios from 'axios'

class App extends Component{

  state = {
    playlists : []
  }
  
  
  pegarPlaylist = () => {
    
    
    axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/',{
      headers:{
        Authorization: "daniel-henrique-dumont"
      }
    })    .then(r => {  this.setState({playlists: r.data}) })
    console.log(this.state.playlists)
  }
    adicionarParaPlaylist = (e) => {
      const body = {
        
          name:"mozart"  
      }
       
      
      axios
          .post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',body,{
            headers:{
              Authorization: "daniel-henrique-dumont"
            }
         })
         .then(res => {
          console.log("legal vc criou uma playlist" + res);
        })
        .catch(error => {
          console.log(error.message);
        });

    }
  render(){
    
    return (
      <>
        <button onClick={() => this.adicionarParaPlaylist()}>Criar Playlist</button>
        <button onClick={ this.pegarPlaylist}>Pegar playlist</button>    
        <ul>
        {this.state.playlists.map(e => <li key={e}>{e}</li>)}
        </ul>
      </>
    );
  }
}
  

export default App;
