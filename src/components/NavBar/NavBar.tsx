import logo from "../../assets/react.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <Link to="/">INICIO</Link>
        <Link to="/SonidoEnVivo">SONIDO EN VIVO</Link>
        <Link to="/Microfono">MICRÓFONOS</Link>
        <Link to="/Backline">BACKLINE</Link>
        <Link to="/Iluminacion">ILUMINACIÓN</Link>
        <Link to="/Contact">CONTACTO</Link>
      </ul>
    </div>
  );
}
