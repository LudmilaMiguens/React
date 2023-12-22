import { useState } from 'react'
import './App.css'

function App() {
  const tasaCambio = 350;
  const [pesos, setPesos] = useState("");
  const [dolar, setDolar] = useState("");

  const convertirADolar = (e) =>{
    const nuevoValor = e.target.value;
    setPesos(nuevoValor);
    setDolar(nuevoValor * tasaCambio );
  }
  const convertirAPesos = (e) =>{
    const nuevoValor = e.target.value;
    setDolar(nuevoValor);
    setPesos(nuevoValor / tasaCambio);
  }

  return (
    <>
    <div>
      <div>
        <h1>Conversion de Pesos a Dolar</h1>
      </div>
      <div>
        <input type="text" placeholder= "Pesos" value={pesos} onChange={convertirADolar}/>
      </div>
      <div>
        <input type="text" placeholder= "Dolar" value={dolar} onChange={convertirAPesos}/>
      </div>
    </div>
        
    </>
  )
}


export default App
