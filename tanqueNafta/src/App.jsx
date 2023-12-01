/*maximo de litros 40.
mayor que 30. fondo verde
entre 20 y 30, fondo amarillo
entre 10 y 20 fondo naranja
entre 0 hasta 10 fondo rojo*/

import './App.css'

function App() {
  const valorAleatorio = Math.floor(Math.random() * 40) +1;
  let color = {}
  if (valorAleatorio > 30){
    color = "#3FEB40";
  } else if (valorAleatorio > 20 & valorAleatorio < 30){
    color = "#EBE037";
    } else if (valorAleatorio > 10 & valorAleatorio < 20){
      color = "#EBA543";
    } else {
      color = "#EA443C";
    }
  return (
    <>
    <div>
    <h2>Tanque de Nafta</h2>
     <div style={{backgroundColor: color, padding: "10px", margin: "10px", color: "white"}}>
    <p>Litros: {valorAleatorio}</p>
     </div>
    </div>
    </>
  )
}

export default App
