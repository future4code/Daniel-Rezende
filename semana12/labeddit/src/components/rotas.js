import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cadastro from './cadastro'
import Feeds from './feeds'
import Login from './login'
import Posts from './post'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Cadastro/>
                </Route>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/feeds'>
                    <Feeds/>
                </Route>
                <Route exact path='/posts'>
                    <Posts/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}