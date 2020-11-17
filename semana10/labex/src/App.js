import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Rotas from './components/Rotas'
import GlobalStyle from './components/globalStyle'

const ElementoFluxograma = styled.div`
  width:10vw;height:10vh;
  background-color:aqua;
`
function App() {
  return (
  <>
   <Rotas/>
   <GlobalStyle/>
  </>
  );
}

export default App;
