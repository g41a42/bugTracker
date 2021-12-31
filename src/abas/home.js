import React,{ Component } from "react";
import { Link } from "react-router-dom";
import "../css/projetosAbertos.css";
import ListaProjetos from "./ListaProjetos";
class Home extends Component {
  render() {
    return (
      <div>
        <ul className="projetosMenu">
          <li className="botaoClaro">
            <Link to="/">
            <p >Projetos Abertos</p>
            </Link>
          </li>
          <li className="botaoEscuro">
            <Link to="/Criar">
            <p>Criar Projetos</p>
            </Link>
          </li>
        </ul>
        <ListaProjetos />
      </div>
    );
  }
}
export default Home;
