import React, { useState } from 'react'
import Formulario from './components/Formulario'
import TodoList from './components/TodoList'

const initialState = [
  {
    id:1,
    title:"todo 01",
    description:"Descripcion 01",
    state: "pendiente",
    priority:false,
    state:true // Cambiamos a un booleano para manejarlo mejor.
  },
  {
    id:2,
    title:"todo 02",
    description:"Descripcion 02",
    state: "pendiente",
    priority:false,
    state:true
  }
]

const App = () => {

  // Estado - Lista de componentes
  const [todos, setTodos] = useState(initialState)

  // Funcion añadir tarea
  const addTodo = todo => {
    setTodos([...todos,todo])
  }

  // Función deleteTodo
  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  // Función updateTodo
  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id == id) {
        todo.state = !todo.state
      }
      return todo
    })
    setTodos(newArray)
  }
  
  // Función editTodo
  const editTodo = (id) => {
    const newArray = todos.map(todo => {
      if (todo.id == id) {
        todo.description = "ME HAN EDITADO"
      }
      return todo
    })
    setTodos(newArray)
  }

  return (
    <div className='container'>
      <h1>Formularios</h1>
      < Formulario addTodo = {addTodo} />
      < TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
    </div>
  )
}

export default App