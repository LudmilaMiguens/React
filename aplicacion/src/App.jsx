import { useState } from 'react';
import './App.css'


function App() {
  const[contador, setContador] = useState(0);
  const incrementoContador = () => {
   setContador (contador +1)
  };
  const restarContador = () => {
    setContador (contador -1)
  };
  const [texto, setTexto] = useState ("")
  const leerInput = (e) => {
    setTexto(e.target.value);
  }


  return (
    <>
      <h3>Contador</h3>
      <p>{contador}</p>
      <button onClick={incrementoContador}>Agregar uno</button>
      <button onClick={restarContador}> Restar uno</button>

      <form >
        <input type="text" placeholder='Ingresa tu texto...'
        onChange={leerInput}/>
       </form>
        <p>Estado del Input:</p>
        <p>{texto}</p>
    

    </>
  )
}

export default App
