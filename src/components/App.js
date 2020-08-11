import React from 'react';
import Header from './elements/Header';
import Home from './Home';
import { GlobalStyle } from './styles/GlobalsStyle';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
