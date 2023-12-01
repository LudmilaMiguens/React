/*crear un arry de peliculas las cuales se distingan por su id entre 60 y 100 naranjas, entre 30 y 60 rosa y entre 0 y 30 violetas*/

import './App.css'

function App() {
  const peliculas = [{id: 11,titulo: "La Ciudad Perdida", genero: "Acción"},{ id: 55, titulo: "Comedia en el Espacio", genero: "Comedia"},{id: 61,titulo: "Código Oculto", genero: "Thriller"},{id: 32,titulo: "La Última Frontera", genero: "Western"},  {id: 20,titulo: "Rastro de Sangre", genero: "Terror"},{id: 45,titulo: "Amor en París", genero: "Romance"}, {id: 85, titulo: "El Misterio de la Noche", genero: "Suspense"}, {id: 8,titulo: "Aventuras en la Selva", genero: " Aventura"}, {id: 62, titulo: "Sombras del Pasado", genero: "Drama"}, {id: 7, titulo: "Titanes del Espacio", genero: "Ciencia ficción"}];

  const color = {};
  peliculas.forEach((p) => {
   if (p.id <= 100 && p.id > 60){
    color[p.id] = "#EB7B3F"
  } else if (p.id >= 30 && p.id < 60){
    color[p.id] = "#EB2BBC"
  }else{
    color[p.id] = "#9144EB"
  }
  });
  

  return (
    <>
    <div>
      <h1>Peliculas</h1>
      {peliculas.map((p) => (<h5 key= {p.id} style={{backgroundColor: color[p.id]}}> Titulo: {p.titulo} Genero: {p.genero} 
      </h5>
        ))}
    </div>
    </>
  )
}

export default App
