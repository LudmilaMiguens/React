import { useState } from 'react'
import './App.css'

function App() {
  const [centigrados, setCentigrados] = useState ("");
  const [fahrenheit , setFahrenheit] = useState ("");

  const convertirAFahrenheit = (e) => {
    const nuevoValor  = e.target.value;
    setCentigrados(nuevoValor);
    setFahrenheit( nuevoValor * (9/5) + 32);
  }
  const convertirACentigrados = (e) => {
    const nuevoValor = e.target.value;
    setFahrenheit(nuevoValor);
    setCentigrados(nuevoValor / (9/5) + 32);
  }

  return (
    <>
    <div>
      <h1> Conversor de Grados</h1>
      <div>
        <input type="text" placeholder='Grados centigrados' value={centigrados} onChange={convertirAFahrenheit} />
      </div>
      <div>
        <input type="text" placeholder='Grados Fahrenheit' value={fahrenheit} onChange={convertirACentigrados} />
      </div>
    </div>
      
    </>
  )
}

export default App
