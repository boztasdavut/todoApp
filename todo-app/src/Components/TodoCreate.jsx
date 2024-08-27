import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import "../css/todo-create.css"


function TodoCreate(props) {
    const [todo, setTodo] = useState("");
    const addTodo = (todo) =>{
        props.addTodo(todo);
        setTodo("");
    }

  return (
    <div className='todo-create-container'>
      <div><textarea value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Text...' ></textarea></div>
      <div>
        <IoIosAddCircle id="todo-ekle-butonu" onClick={()=>addTodo(todo)} />
      </div>
    </div>
  )
}

export default TodoCreate
