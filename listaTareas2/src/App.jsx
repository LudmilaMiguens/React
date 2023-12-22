import { useState } from 'react'
import React, { useEffect } from 'react';
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { Input } from './componentes/input';
import { getItems } from '../../listaDeTareas/util/getItem';
import { Historial } from './componentes/historias';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState(getItems);

useEffect(() =>{
  window.localStorage.setItem("todo-list", JSON.stringify(todos))
}, [todos]);

const handleSudmit = (e) => {
  e.preventDefault();
  if (e.target.input.value === "") return;
  const newTodo = {
      id: uuidv4(),
      titulo: e.target.input.value.trim(),
      estado: false
  };
  e.target.reset();
  setTodos([
      ...todos,
      newTodo
  ]);
};

const cambiarEstado = (id) => {
  const todosModificados = todos.map(todo => todo.id === id? {...todo, estado: !todo.estado} : todo);
  setTodos([...todosModificados]);
};

const borrarTodos = (id) => {
  const todosBorrar = todos.filter(todo => todo.id !== id);
  setTodos([...todosBorrar]);
};
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to = "">Inicio</Link>
      <Link to = "/componentes/historias">Historial</Link>
    </nav>
    <Routes>
      <Route path = "/" element = {<Inicio/>}/>
      <Route path = "/componentes/historias" element = {<Historial/>}/>
    </Routes>

    </BrowserRouter>
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
          <td onClick={() => borrarTodos (todo.id)}>Borrar</td>
        </tr>)
        )}
      </tbody>
    </table>

    <footer>@listaDeTareas</footer>      
    </>
  )
}

export default App
