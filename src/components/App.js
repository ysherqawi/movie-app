import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './elements/Header';
import Home from './Home';
import { GlobalStyle } from './styles/GlobalsStyle';
import Movie from './Movie';
import NotFound from './layout/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/movies/:id' component={Movie} />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
