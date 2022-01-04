import react from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <ul className="navMenu">
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/">Perfis</Link>
        </li>
        <li className="navItem">
          <Link to="/">Mensagens</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
