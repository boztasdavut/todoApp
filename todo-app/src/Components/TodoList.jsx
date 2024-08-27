import React, { useState } from 'react'
import Todo from './Todo'
import "../css/todo-list.css"
function TodoList(props) {

  return (
    <div className='todo-list-container'>
      {
        props.todos.map((todo, index)=>(
        <Todo key={index} index={index} todo={todo} deleteTodos={props.deleteTodo} updateTodo={props.updateTodo} />
        ))
        
      }
    </div>
  )
}

export default TodoList
