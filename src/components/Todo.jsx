import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";

function Todo(props) {
  const [done, setDone] = useState(false);

  const doneStyle = {
    textDecoration: "line-through",
    color: "#CACDE8",
  };

  const [isHover, setIsHover] = useState(false);

  function handleClick(event) {
    setDone(event.target.checked);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="todo-item">
        <div>
          <input type="checkbox" onClick={handleClick} />
        </div>
        <p style={done ? doneStyle : {}}>{props.content}</p>
        <button className="btn-delete" onClick={handleDelete}>
          <CloseIcon />
        </button>
      </div>
      <hr></hr>
    </>
  );
}

export default Todo;
