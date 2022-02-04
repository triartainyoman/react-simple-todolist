import React, { useState } from "react";

function CreateArea(props) {
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function submitTodo(event) {
    props.onAdd(todo);
    event.preventDefault();
    setTodo("");
  }

  return (
    <form>
      <div className="input-wrapper">
        <input
          onChange={handleChange}
          className="content"
          type="text"
          name="content"
          value={todo}
          placeholder="Create a new note..."
          autoComplete="off"
        />
        <button onClick={submitTodo}>Add</button>
      </div>
    </form>
  );
}

export default CreateArea;
