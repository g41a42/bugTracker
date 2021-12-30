import React, { Component } from "react";
import Envolvidos from "./Envolvidos";
class ListaProjetos extends Component {
    render() {
      return (
        <ul className="listaDeProjetos">
          <li className="projeto">
            <h2>Titulo do Projeto</h2>
            <p>data da ultima modificação</p>
            <p>ultima modificação</p>
            <p>data da criação</p>
          </li>
          <li className="projeto">
            <h2>Titulo do Projeto</h2>
            <p>data da ultima modificação</p>
            <p>ultima modificação</p>
            <p>data da criação</p>
          </li>
        </ul>
      );
    }
  }
export default ListaProjetos