import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SonidoEnVivo from "./pages/SonidoEnVivo";
import Microfono from "./pages/Microfono";
import Backline from "./pages/Backline";
import Iluminación from "./pages/Iluminacion";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SonidoEnVivo" element={<SonidoEnVivo />}></Route>
          <Route path="/Microfono" element={<Microfono />}></Route>
          <Route path="/Backline" element={<Backline />}></Route>
          <Route path="/Iluminacion" element={<Iluminación />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
