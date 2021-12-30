import React from "react";
import "../css/projetosAbertos.css";
import ListaProjetos from './ListaProjetos'
function Home() {
  return (
    <div>
      <ul className="projetosMenu">
        <li className="botaoClaro">
          <a href="/">Projetos Abertos</a>
        </li>
        <li className="botaoEscuro">
          <a href="/Criar">Criar Projetos</a>
        </li>
      </ul>
      <ListaProjetos />
    </div>
  );
}
export default Home;
