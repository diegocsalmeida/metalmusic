import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

import Erro404 from './pages/erros/404'

//const Pagina404 = () => (<div>Página 404</div>)


ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Erro404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
