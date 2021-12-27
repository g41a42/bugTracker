import React from "react"
import '../css/projetosAbertos.css'
function Home (){
return(
    <div>
        <ul className='projetosMenu'>
            <li className='botaoClaro'><a href='http://localhost:3000'>Projetos Abertos</a></li>
            <li className='botaoEscuro'><a href='http://localhost:3000/Criar'>Criar Projetos</a></li>
        </ul>
        <ul className='listaDeProjetos'>
            <li className='projeto'>
            <h2>Titulo do Projeto</h2>
            <p>data da ultima modificação</p>
            <p>ultima modificação</p>
            <p>data da criação</p>
            </li>
            <li className='projeto'>
            <h2>Titulo do Projeto</h2>
            <p>data da ultima modificação</p>
            <p>ultima modificação</p>
            <p>data da criação</p>
            </li>
        </ul>
    </div>
)}
export default Home;