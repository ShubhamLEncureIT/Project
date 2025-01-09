import React, { useEffect, useState } from 'react';

//Destrcturing required {} bracket without used props
//export const AddTodos = (props) => {
export const AddTodos = ({addTodo,editTodo}) => {

  const [title, setTitle] = useState(editTodo?.title ?? "Title");

  useEffect(()=>{
    if(editTodo){
      setTitle(editTodo.title);
      setDesc(editTodo.desc);
    }
  },[editTodo]);

  const [desc, setDesc] = useState(editTodo?.desc ?? "Descriptions");



  //console.log("Edit Form DB :",editTodo?.title, "StateValue: ",title);


  const formSubmit = (e) =>{

    //Page not reload we used below line e means event
    e.preventDefault();

    let todo = {
      title: title,
      desc: desc
    }; 

    if(!title || !desc)
    {
      alert("Title or Description is required") 
    }else if(editTodo){
      todo = {...todo, sno: editTodo.sno};
      addTodo(todo);
      setTitle("");
      setDesc("");
    }else{
      addTodo(todo);
      setTitle("");
      setDesc("");
    } 
  }

  return (
    <div className='container my-3'>
      <h3>{addTodo ? "Add a Todo" : "Edit a Todo"}</h3>
      <form onSubmit={formSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter Title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="description" placeholder="Enter Description" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Submit</button>
      </form>
    </div>
  )

}