import React, { Component, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Envolvidos from "./Envolvidos";
function ListaProjetos() {
  const { projetos } = useContext(GlobalContext);
  return (
    <ul className="listaDeProjetos">
      {projetos.map((projeto) => {
        return (
          <li key={projeto.id} className="projeto">
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
            <p>data da ultima modificação</p>
            <p>ultima modificação</p>
            <p>data da criação</p>
          </li>
        );
      })}
    </ul>
  );
}
export default ListaProjetos;
