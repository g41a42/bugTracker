import React from "react"
import '../css/criaProjeto.css'
function Cria (){
return(
    <div>
    <ul className='projetosMenu'>
        <li className='botaoEscuro'><a href='#'>Projetos Abertos</a></li>
        <li className='botaoClaro'><a href='#'>Criar Projetos</a></li>
    </ul>
    <div className="criacao">
        <div className="form">
            <form>
                <label >Titulo do Projeto</label><br />
                <input className="inputTituloDoProjeto"></input><br />
                <label>Descrição do Projeto</label><br />
                <input className="inputDescricaoDoProjeto"></input>
            </form>
        </div>
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
    </div>
    </div>
)}
export default Cria