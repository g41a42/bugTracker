import React, { Component } from "react";
import "../css/criaProjeto.css";
import Envolvidos from "./Envolvidos";
class Cria extends Component {
  render() {
    return (
      <div>
        <ul className="projetosMenu">
          <li className="botaoEscuro">
            <a href="/">Projetos Abertos</a>
          </li>
          <li className="botaoClaro">
            <a href="/Criar">Criar Projetos</a>
          </li>
        </ul>
        <div className="criacao">
          <div className="form">
            <form>
              <label>Titulo do Projeto</label>
              <br />
              <textarea className="inputTituloDoProjeto"></textarea>
              <br />
              <label>Descrição do Projeto</label>
              <br />
              <textarea className="inputDescricaoDoProjeto"></textarea>
              <br />
              <button type="submit">Criar Projeto</button>
            </form>
          </div>
          <Envolvidos />
        </div>
      </div>
    );
  }
}
export default Cria;