import React, { Component, useContext, useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import Envolvidos from "./Envolvidos";
import "../css/Projetos.css";
import { GlobalContext } from "../context/GlobalState";

function Projetos() {
  const noClick = {
    cursor: "default",
  };
  const [projetoCerto, setProjetoCerto] = useState({
    id: "",
    titulo: "titulo do projeto",
    desc: "",
  });
  const match = useMatch("/Projetos/:id");
  const projetoid = match.params.id;
  const projeto = useContext(GlobalContext);
  useEffect(async () => {
    const projetoCerto = projeto.projetos.find(
      (projeto) => projeto.id === projetoid
    );
    console.log(projetoCerto);
    setProjetoCerto(projetoCerto)
  }, [projetoid]);
  return (
    <div className="all">
      <ul className="projetosMenu">
        <li className="botaoClaro">
          <Link to="#" style={noClick}>
            <p>{projetoCerto.titulo}</p>
          </Link>
        </li>
      </ul>
      <div className="container">
        <div className="sobreOProjeto">
          <p className="descProjeto">{projetoCerto.descricao}</p>
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

export default Projetos;
