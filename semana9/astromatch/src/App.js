import {createGlobalStyle} from 'styled-components'
import Post from './components/post'

const GlobalStyled = createGlobalStyle`
  body{background-color:white;}
`

function App() {
  return (
    <>
      <GlobalStyled/>
      <Post/>
    </>
    
  );
}

export default App;
