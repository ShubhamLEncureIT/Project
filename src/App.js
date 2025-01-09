import React, { useEffect } from "react";
//Footer is Arrow Function and it is name exports
import { useState } from "react";
import { AddTodos } from "./MyComponents/AddTodos";
import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";



//  import ReactExample from "./MyComponents/Counter";

export default function App() {  

  const onDelete = (todo) =>{
    //console.log("Click on Delete: ",todo);
    setTodos(todos.filter((e) => {
      //console.log("Todos Items ",e);
      //console.log("User Selected todo: ",todo);
      return e!==todo;
    }))
  }

  const editTodo = (todo) => {
    setCurrentTodo(todo);
    // console.log("Edit Todo: ",todo);
    //return todo;
  }

  const addTodo = (todo) => {
    //  console.log("Edittodo: ",todo);
     const title = todo.title;
     const desc = todo.desc;
    if(currentTodo === null){
      const sno = todos.length > 0 ? todos[todos.length-1]?.sno + 1 : 1; 
      const myTodos = {
        sno,
        title,
        desc
      }
      setTodos((todos) => [...todos, myTodos]);
      // console.log("Values: ",myTodos,);
    }else{
      const sno = todo.sno;
      // console.log("Todos for update: ",currentTodo);
      const myTodos = {
        sno,
        title,
        desc
      }
      setTodos(todos.map((t) => (t.sno === todo.sno ? myTodos : t)));
    }
    setCurrentTodo(null);
  }
  
  const [todos, setTodos] = useState(()=>{
    const initTodo = localStorage.getItem('todos');
    return initTodo ? JSON.parse(initTodo) : []; //Return An empty array if null
  });

  const [currentTodo, setCurrentTodo] = useState(null);

  //Render when change todos
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]);


  return (
    <>
                 {/* <ReactExample />  */}

      {/* <Router> */}

        <Header title="My Todos List" searchBar={true} />
        <Todos todos={todos} onDelete={onDelete} onEdit={editTodo} />
        <AddTodos addTodo={addTodo} editTodo={currentTodo} />

        {/* <Routes>   */}
                    
          {/* <Route path="/" element={ <Todos todos={todos} /> } />

          <Route path="/add" element={ <AddTodos addTodo={addTodo} editTodo={editTodo} /> } /> */}

          {/* <Route path="/delete" element={ <Todos todos={todos} onDelete={onDelete} onEdit={editTodo}/> } />

          <Route path="/about" element={<About />} /> */}

        {/* </Routes> */}

        <Footer />

      {/* </Router> */}
    </>
  );
}
