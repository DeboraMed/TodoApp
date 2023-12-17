import React, { useState } from 'react';

export const Todo = ({ todo, deleteTodo, updateTodo, editTodo }) => {
  const { id, title, description, priority, state } = todo
  const [editMode, setEditMode] = useState(false)
  const [editedTodo, setEditedTodo] = useState({ id, title, description, state, priority })

  const handleEdit = () => {
    setEditMode(true);
  }

  const handleSave = () => {
    editTodo(id, editedTodo)
    setEditMode(false)
  }

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setEditedTodo((prevTodo) => ({
      ...prevTodo,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <li className='list-group-item'>
      <div className='d-flex justify-content-between align-items-start'>
        <div>
          {editMode ? (
            <div>
              <input
                name='title'
                type='text'
                className='form-control mb-2'
                value={editedTodo.title}
                onChange={handleInputChange}
              />
              <textarea
                name='description'
                className='form-control mb-2'
                value={editedTodo.description}
                onChange={handleInputChange}
              />
              <select
                name='state'
                className='form-control mb-2'
                value={editedTodo.state}
                onChange={handleInputChange}
              >
                <option value='pendiente'>Pendiente</option>
                <option value='completada'>Completada</option>
              </select>
              <div className='form-check mb-2'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='priority'
                  id='inputChecked'
                  checked={editedTodo.priority}
                  onChange={handleInputChange}
                />
                <label htmlFor='inputChecked' className='form-check-label'>
                  Prioridad
                </label>
              </div>
              <button onClick={handleSave} className='btn btn-sm btn-success mr-2'>
                Guardar
              </button>
            </div>
          ) : (
            <div>
              <h5 className={state && 'completada'}>{title}</h5>
              <p className={state && 'completada'}>{description}</p>
              <div className='d-flex'>
                <button onClick={() => deleteTodo(id)} className='btn btn-sm btn-danger mr-2'>
                  Eliminar
                </button>
                <button onClick={() => handleEdit(id)} className='btn btn-sm btn-warning mr-2'>
                  Editar
                </button>
                <button onClick={() => updateTodo(id)} className='btn btn-sm btn-primary'>
                  Actualizar Estado
                </button>
              </div>
            </div>
          )}
        </div>
        <span className='badge badge-primary'>
            {priority && 'prioridad'}
        </span>
      </div>
    </li>
  )
}