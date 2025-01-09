import React from 'react';

export const TodoItems = (props) => {

  const tableHeaderStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  };
  
  const tableCellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };  

  const onEdit = (todo) => {    
    props.onEdit(todo)
  }

  return (
    <div>
      <table>

        <thead style={tableHeaderStyle}>
          <tr>
            <th style={tableCellStyle}>Sno</th>
            <th style={tableCellStyle}>Title</th>
            <th style={tableCellStyle}>Description</th>
            {props.onDelete!=null &&
              <th style={tableCellStyle}>Actions</th>
            }
          </tr>
        </thead>
        
        <tbody>
          {props.todos.length > 0 && props.todos.map((todo) => (
            <tr key={todo.sno}>
              <td style={tableCellStyle}>{todo.sno}</td>
              <td style={tableCellStyle}>{todo.title}</td>
              <td style={tableCellStyle}>{todo.desc}</td>
              {props.onDelete!=null &&
                <td>
                  <button className='btn btn-sm btn-outline-primary' onClick={()=>{onEdit(todo)}}>Edit</button>

                  <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(todo)}}>Delete</button>
                </td>
              }
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
