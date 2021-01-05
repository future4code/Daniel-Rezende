import react,{useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cadastro from './cadastro'
import CriarViagem from './CriarViagem'
import DetalhesViagens from './DetalhesDaViagem'
import Home from './Home'
import Login from './Login'
import Viagens from './viagensDisponiveis'

export default function Rotas() {
    return (
      <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        
        <Route exact path="/cadastro">
          <Cadastro/>
        </Route>

        <Route exact path="/criarViagem">
          <CriarViagem/>
        </Route>

        <Route exact path="/detalhesDaViagem">
          <DetalhesViagens/>
        </Route>

        <Route exact path="/viagens/ver">
          <Viagens/>
        </Route>

        
      </Switch>
    </BrowserRouter>
    );
  }