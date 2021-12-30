import React,{Component} from "react";
class Envolvidos extends Component{
    render(){
        return(
            <div className="envolvidos">
          <h2>Envolvidos</h2>
          <ul>
            <li>
              <h3>Nome</h3>
              <p>Função</p>
            </li>
          </ul>
          <form>
            <label>Adicionar Dev</label>
            <input></input>
          </form>
        </div>
        )
    }
}
export default Envolvidos