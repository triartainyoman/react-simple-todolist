import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [todo, setTodo] = useState("");
  const [isClick, setIsClick] = useState(false);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function submitTodo(event) {
    props.onAdd(todo);
    event.preventDefault();
    setTodo("");
    setIsClick(false);
  }

  function zoomIn() {
    setIsClick(true);
  }

  return (
    <form>
      <div className="input-wrapper">
        <input
          onChange={handleChange}
          onClick={zoomIn}
          className="content"
          type="text"
          name="content"
          value={todo}
          placeholder="Create a new note..."
          autoComplete="off"
        />
        <Zoom in={isClick}>
          <Fab type="submit" color="secondary" onClick={submitTodo}>
            <AddIcon />
          </Fab>
        </Zoom>
      </div>
    </form>
  );
}

export default CreateArea;
