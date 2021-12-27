import react from "react";
import '../css/nav.css'
function Nav(){
    return(
        <div>
            <ul className='navMenu'>
                <li className='navItem'><a href='http://localhost:3000'>Home</a></li>
                <li className='navItem'><a href='#'>Perfis</a></li>
                <li className='navItem'><a href='#'>Mensagens</a></li>
            </ul>
        </div>
    )
}
export default Nav;