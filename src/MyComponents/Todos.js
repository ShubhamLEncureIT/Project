import React from 'react'
import { TodoItems } from './TodoItem'

export const Todos = ({todos,onDelete,onEdit}) => {
  let todosStyle = {
    minHeight:"70vh",
    margin: "10px auto"
  }
  
  //return;
  
  return (
    <div className="container" style={todosStyle}>
      {Array.isArray(todos) && todos.length > 0 ? 
      <>
        {/* Return Length of todos array or function */}
        {/* my-3 means Margin Top and Bottom */}
        <h3 className='text-center my-3'>Todos List: {todos.length}</h3> 

        <TodoItems todos={todos} onDelete={onDelete} onEdit={onEdit} />
        
      </>
      : "Data not Found"}
    </div>
  )
}
