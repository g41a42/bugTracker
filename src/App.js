import React from 'react';
import './reset.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className='navMenu'>
        <li className='navItem'><a href='#'>Home</a></li>
        <li className='navItem'><a href='#'>Perfis</a></li>
        <li className='navItem'><a href='#'>Mensagens</a></li>
      </ul>
      <ul className='projetosMenu'>
        <li className='projetosAbertosBotao'><a href='#'>Projetos Abertos</a></li>
        <li className='criarProjetosBotao'><a href='#'>Criar Projetos</a></li>
      </ul>
    </div>
  );
}

export default App;
