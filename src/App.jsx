import React, { useState } from 'react';
import Input from './Components/Input';
import Card from './Components/Card';
import "./App.css"

const App = () => {
  const [todo, settodo] = useState([]);
  const  addTodo =(newTitle, newDesc)=>{
    let data = {
      id:todo.length+1,
      title: newTitle,
      descripation: newDesc,
      completed:"false"
    };
    settodo([...todo,data])
    console.log("Added");
  }

  //console.log(todo);
  const deleteTodo =()=>{
    settodo(todo.filter((todo)=>todo.id !== id))
  };
  return (
    <div className='todo-app  '>
      
      <h1 className='todo-app text-lg-cente'>My todo </h1>
      
      <Input  addTodo={addTodo}/>
      {todo.map((element,index)=>{
        return(
          <Card element ={element} index={index} deleteTodo={deleteTodo} />
        )
      })}
     
      
    </div>
  );
};

export default App;