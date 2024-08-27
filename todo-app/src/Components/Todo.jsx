import React, { useState } from "react";
import { MdRateReview } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "../css/todo.css";
import { MdLibraryAddCheck } from "react-icons/md";

function Todo(props) {
  const [editable, setEditable] = useState(false);
  const [guncelDeger, setGuncelDeger] = useState("");

  const todoDeleteMetotu = (todoId) => {
    props.deleteTodos(todoId);
  };

  const todoUpdateMetotu = () => {
    setEditable(true);
    setGuncelDeger(props.todo.metin);

  };

  const todoSaveUpdate = () => {
    setEditable(false);
    props.updateTodo(guncelDeger, props.index);
    
  };

  return (
    <div className="todo-container-div">
      <div>
        <h2>TASK: {props.todo.id+1}</h2>
      </div>
      {editable ? (
        <div className="taskMetin-Div">
          <textarea
            value={guncelDeger}
            onChange={(e) => setGuncelDeger(e.target.value)}
          ></textarea>
        </div>
      ) : (
        <div className="taskMetin-Div">
          <p>{props.todo.metin}</p>
        </div>
      )}

      <div>
        {editable ? (
          <MdLibraryAddCheck
            className="degisim-butonlari"
            onClick={todoSaveUpdate}
          />
        ) : (
          <MdRateReview
            className="degisim-butonlari"
            onClick={todoUpdateMetotu}
          />
        )}

        <RiDeleteBin5Fill
          className="degisim-butonlari"
          onClick={() => todoDeleteMetotu(props.todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
