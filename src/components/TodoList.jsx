import React from 'react'
import { Todo } from './Todo'

const TodoList = ({todos, deleteTodo, updateTodo, editTodo}) => {
  return (
    <div className='mt-2'>
    <h1 className='text-center'>Lista de tareas</h1>
      <ul>
        {
          todos.sort((a, b)=> a.priority > b.priority ? -1 : 1).sort((a, b)=> a.state < b.state ? -1 : 1)
          .map(todo=> (
            < Todo key={todo.id} todo = {todo} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
          ))
        }
      </ul>
    </div>

  )
}

export default TodoList