import React, { Component, useContext, useState } from "react";
import "../css/criaProjeto.css";
import Envolvidos from "./Envolvidos";
import { addProjeto, GlobalContext } from "../context/GlobalState";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
function Cria() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDesc] = useState("");
  const { addProjeto } = useContext(GlobalContext);
  const navigate = useNavigate();
  const criarProjeto = (e) => {
    e.preventDefault();
    navigate("/");
    const novoProjeto = {
      id: uuid(),
      titulo: titulo,
      descricao: descricao,
    };
    addProjeto(novoProjeto);
  };
  const mudaTitulo = (e) => {
    setTitulo(e.target.value);
  };
  const mudaDesc = (e) => {
    setDesc(e.target.value);
  };
  return (
    <div>
      <ul className="projetosMenu">
        <li className="botaoEscuro">
          <Link to="/">
            <p>Projetos Abertos</p>
          </Link>
        </li>
        <li className="botaoClaro">
          <Link to="/Criar">
            <p>Criar Projetos</p>
          </Link>
        </li>
      </ul>
      <div className="criacao">
        <div className="form">
          <form onSubmit={criarProjeto}>
            <label>Titulo do Projeto</label>
            <br />
            <textarea
              onChange={mudaTitulo}
              className="inputTituloDoProjeto"
            ></textarea>
            <br />
            <label>Descrição do Projeto</label>
            <br />
            <textarea
              onChange={mudaDesc}
              className="inputDescricaoDoProjeto"
            ></textarea>
            <br />
            <button type="submit">Criar Projeto</button>
          </form>
        </div>
        <Envolvidos />
      </div>
    </div>
  );
}
export default Cria;
