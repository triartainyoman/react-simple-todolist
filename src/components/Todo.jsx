import React from "react";

function Todo(props) {
  return (
    <>
      <div className="todo-item">
        <input type="checkbox" />
        <p>{props.content}</p>
      </div>
      <hr></hr>
    </>
  );
}

export default Todo;
