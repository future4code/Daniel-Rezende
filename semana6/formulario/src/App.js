import React from 'react';
import './App.css'
function App() {

  return (
    <div id="App">
      <label>Nome</label> <br/>
      <input type="text"></input> <br/><br/>
      <label>idade</label>  <br/>
      <input type="number"></input> <br/><br/>
      <label>E-mail</label> <br/>
      <input type="email"></input>  <br/><br/>
      <label>Escolaridade</label> <br/>
      <select name="escolaridade">
        <option value="1">
          ensino médio incompleto
        </option>
        <option value="2">
          ensino médio completo
        </option>
        <option value="3">
          ensino superior incompleto
        </option>
        <option value="4">
          ensino superior completo
        </option>
      </select><br/><br/><br/>
      <button>Próxima etapa</button>
        </div>
      
  );
}

export default App;
