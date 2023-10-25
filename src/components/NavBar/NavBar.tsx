import logo from "../../assets/react.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <li>INICIO</li>
        <li>SONIDO EN VIVO</li>
        <li>MICRÓFONOS</li>
        <li>BACKLINE</li>
        <li>ILUMINACIÓN</li>
        <li>CONTACTO</li>
      </ul>
    </div>
  );
}
