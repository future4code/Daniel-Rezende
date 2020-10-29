import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Selecionador = styled.select`
  width:100%;
`
class App extends Component{
  state = {
    dragoes: [],
    descricaoDragaoSelecionado : ''
  }
  
  componentDidMount = () => {
    this.pegarDragoes();
  };

  pegarDragoes = () =>{
    axios
    .get('https://api.spacexdata.com/v3/dragons')
    .then(r =>{
      this.setState({dragoes: r.data })
    })
    .catch(error => {
      console.log(error.message)
    })

  }
  pegarDescricao = c =>{
    const descricao = `https://api.spacexdata.com/v3/dragons/${c.target.value}`
    axios.get(descricao).then(r => {
      this.setState({descricaoDragaoSelecionado:r.data.description})
      
    })
  }


  render(){
  console.log(this.state.dragoes)
  const optionList = this.state.dragoes.map(dragon => <option key={dragon.id}>{dragon.id}</option>) 
     
  
    return (
      <>
          <Selecionador onChange={this.pegarDescricao}>
            <option>Selecione</option>
            {optionList}
          </Selecionador>
            {this.state.descricaoDragaoSelecionado}
      </>
    );
  
  } 
}
    
  

export default App;
