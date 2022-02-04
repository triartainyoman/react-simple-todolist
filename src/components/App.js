import React from "react";

function App() {
  return (
    <div>
      <img className="img" src="/background.png" />
      <div className="main">
        <h1 className="header">TODO</h1>
        <form>
          <div className="input-wrapper">
            <input
              className="content"
              type="text"
              name="content"
              placeholder="Create a new note..."
              autoComplete="off"
            />
            <button>Add</button>
          </div>
        </form>
        <div className="todo">
          <div className="todo-item">
            <input type="radio" />
            <p>Buy two bottles of milk.</p>
          </div>
          <hr></hr>
          <div className="todo-item">
            <input type="radio" />
            <p>Buy two bottles of milk.</p>
          </div>
          <hr></hr>
          <div className="todo-footer">
            <p>2 items left</p>
            <p>Clear completed</p>
          </div>
        </div>
      </div>
      <footer>
        <p>Copyright 2022 by Triarta</p>
      </footer>
    </div>
  );
}

export default App;
