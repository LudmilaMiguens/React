import { useState } from 'react'
import './App.css'

function App() {
  const [ancho, setAncho] = useState ("");
  const [alto, setAlto] = useState ("");
  const [superficie, setSuperficie] = useState("");

  const calcularSuperficie = () =>{
   const superficieCalculada = alto * ancho;
   setSuperficie(superficieCalculada);

  }
  const manejarAncho = (e) => {
    const nuevoValor = e.target.value;
    setAncho(nuevoValor);
    calcularSuperficie()
  }
  const manejarAlto = (e) => {
    const nuevoValor = e.target.value;
    setAlto(nuevoValor);
    calcularSuperficie();
  }
 

  return (
    <>
    <div>
      <h1>Superficie de un rectangulo</h1>
      <div>
        <input type="text" placeholder='Ancho' value={ancho} onChange={manejarAncho} />
      </div>
      <div> 
        <input type="text" placeholder='Alto' value={alto} onChange={manejarAlto}/>
      </div>
      <div>
        <input type="text" placeholder='Superficie Calculada' value={superficie} readOnly/>
      </div>
    </div>
    </>
  )
}

export default App
