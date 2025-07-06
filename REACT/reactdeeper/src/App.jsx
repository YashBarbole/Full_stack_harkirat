import React from "react";
import { useState } from "react";

function App(){
const [todos,setTodos]=useState([
  
  {
  id:1,
  title:"go gym",
  description:"yash go gym"
},
 
  {
  id:2,
  title:"food",
  description:"yash food"
},

  {
  id:3,
  title:"study",
  description:"yash go study"
}

])

function addTodo(){
  setTodos([...todos,{
    id:4,
    title:Math.random(),
    description:Math.random()
  }])
}


  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
        {todos.map(todo =><Todo title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App