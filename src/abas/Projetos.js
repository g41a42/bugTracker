import React, { Component } from "react";
import { Link } from "react-router-dom";
import Envolvidos from "./Envolvidos";
import "../css/Projetos.css";
class Projetos extends Component {
  render() {
    const noClick = {
    cursor: 'default'
    }
    return (
      <div className="all">
        <ul className="projetosMenu">
          <li className="botaoClaro">
            <Link to="#" style={noClick}>
              <p>Titulo do Projeto</p>
            </Link>
          </li>
        </ul>
        <div className="container">
          <div className="sobreOProjeto">
            <p className="descProjeto">Descrição do Projeto</p>
            <div className="bug">
              <h2 className="bugTitulo"> Titulo do Bug ou Feature</h2>
              <div className="bugInfo">
                <h3 className="bugDescPH">Descrição</h3>
                <p className="bugDesc">descrição do bug ou feature</p>
                <h4>criação:</h4>
                <p>data</p>
                <h4>Prazo:</h4>
                <p>data</p>
              </div>
                <div className="comentarios">
                  <h3 className="comentariosPH">Comentários</h3>
                  <ul>
                    <li className="comentario">
                      <h4>Nome</h4>
                      <p>Comentario</p>
                      <button>Responder</button>
                    </li>
                  </ul>
                  <form className="comentar">
                      <textarea placeholder="comentar bug"></textarea>
                      <button>Comentar</button>
                  </form>
                </div>
            </div>
          </div>
          <div className="alteraProjeto">
            <Envolvidos />
          </div>
        </div>
      </div>
    );
  }
}
export default Projetos;
