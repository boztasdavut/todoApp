import { useState } from "react"
import TodoCreate from "./Components/TodoCreate"
import TodoList from "./Components/TodoList";
import "./App.css"

function App() {
  const [todos,setTodos] = useState([]);
  const [id,setId] = useState(0);
  const addTodo = (metin) =>{
    setTodos([...todos,{
      id:id,
      metin:metin
    }])
    setId(id+1);
  }

  const deleteTodo = (todoId) =>{
    const filteredTodos = todos.filter((todo)=>todo.id !== todoId);
    setTodos(filteredTodos);
  }

  const updateTodo = (metin, id) =>{
    for(let i=0; i<todos.length; i++){
      if(todos[i].id ===id){
        todos[i].metin = metin;
      }
    }
  }

  return (
    <>
      <h1>TODO App</h1>
      <TodoCreate addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />


    </>
  )
}

export default App
