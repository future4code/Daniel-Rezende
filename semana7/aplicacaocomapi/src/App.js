import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`

`
class App extends Component{
  state = {
    dragoes: []
  }
  render(){
    axios
    .get('https://api.spacexdata.com/v3/dragons')
    .then(r =>{
      this.setState({dragoes: r.data })
    })
console.log(this.state.dragoes)
    
    return (
      <>
          
      </>
    );
  }
}
  

export default App;
