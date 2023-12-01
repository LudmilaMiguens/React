import { Mensaje } from "../componentes/emnsaje";

function App() {
  const name = "Me llamo Ludmila";
  const color = "Naranja es mi color favorito";
  const nombres = [{id: 1, nombre:"Ambar"},{id: 2, nombre:"Liliana"}, {id: 3, nombre:"Pedro"},{id: 4, nombre:"Vero"},{id: 5, nombre:"Anabel"},{id: 6, nombre:"Alberto"},{id: 7, nombre: "Lujan"}];
  const colores = [{id:1, color: "Rosa"}, {id:2, color: "Gris"}, {id: 3, color: "Verde"}, {id: 4, color: "Negro"}, {id: 5, color: "Amarillo"}, {id: 6, color: "Naranja"}];
  return (
    <> 
    <h1>Hola Mundo</h1>
    <Mensaje msj = {"Muy buenas tardes"}/>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, temporibus praesentium fugiat illo ipsa laboriosam sit ab omnis dolorem, rem nihil ipsam labore inventore facere veritatis dolores magni quae maxime.</p>
    <h2>Como te llamas? {name}</h2>
    <ol>
      {nombres.map(n => <li key={n.id}>{n.nombre}</li> )}
    </ol>
    <Mensaje msj = {"Chau gracias a todos"}/>
    <Mensaje msj= {color}/>
    <li>
      {colores.map(c => <li key= {c.id}>{c.color}</li>)}
    </li>
    </>
   
  );
}

export default App
