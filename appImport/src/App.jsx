import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Contacto } from './paginas/contacto/contacto';
import { Servicios } from './paginas/servicio/servicio';


function App() {
  return (
      <BrowserRouter>

      <nav>
        <Link to="/contacto" >Contacto</Link>
        <Link to="/servicios" >Servicios</Link>
      </nav>

      <Routes>
        <Route path= "/contacto" element= {<Contacto />}/>
        <Route path= "/servicios" element= {<Servicios />}/>
      </Routes>

      </BrowserRouter>
  );
}

export default App;