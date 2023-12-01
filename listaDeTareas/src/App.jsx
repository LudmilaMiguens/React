import { useState } from 'react'
import './App.css'

import { Input } from './componentes/input';

function App() {
  const [todos, setTodos] = useState([
    {"id" : "454546",
  "titulo": "Hola Pepito",
  "estado": false
},
{
  "id": "54543135",
  "titulo" : "Chau Pepito",
  "estado": true
}
]);
const handleSudmit = (e) => {
  e.preventDeFault();
  const newTodo ={
      id: crypto.randomUUID(), //Agregar el id
      titulo: e.target.input.value,
      estado: false
  };
  setTodos([
      ...todos,
      newTodo
  ]);
}
 const cambiarEstado = (id) =>{
const todosModificados = todos.map(todo => todo.id === id? {...todo, estado: !todo.estado} : todo);
setTodos([...todosModificados]);
 };
 const borrarTodos = (id) =>{
  const todosBorrar = todos.filter(todo => todo.id !== id);
  setTodos([...todosBorrar]);
   };
  return (
    <>
    <header>
     <h1> Lista de tareas!!!</h1> 
    </header>
    <Input onAdd= {(e) => handleSudmit(e)} />
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Titulo</th>
          <th>Estado</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {todos && todos.map(todo => (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.titulo}</td>
          <td onClick={() => cambiarEstado (todo.id)}>{todo.estado ? "Hecho" : "Pendiente" }</td>
          <td onClick={() => borrarTodos(todo.id)}></td>
        </tr>)
        )}
      </tbody>
    </table>
    </>
  )
}

export default App
