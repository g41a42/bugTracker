import React from 'react';
import './css/reset.css'
import Home from './abas/home.js';
import Cria from './abas/CriaProjetos.js';
import Nav from './abas/nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Cria />
    </div>
  );
}

export default App;
