import React, { Component, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Envolvidos from "./Envolvidos";
import { Link } from "react-router-dom";
function ListaProjetos() {
  const { projetos } = useContext(GlobalContext);
  return (
    <ul className="listaDeProjetos">
      {projetos.map((projeto) => {
        return (
          <li key={projeto.id} className="projeto">
            <Link to={`Projetos/${projeto.id}`}>
            <h2>{projeto.titulo}</h2>
            </Link>
            <p>{projeto.descricao}</p>
            <p>data da ultima modificação</p>
            <p>ultima modificação</p>
            <p>{projeto.data}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default ListaProjetos;
