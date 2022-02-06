import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodo) => {
      return [...prevTodo, todo];
    });
  }

  function deleteTodo(todo) {
    setTodos((prevTodo) => {
      return prevTodo.filter((todoItem, index) => {
        return index !== todo;
      });
    });
  }

  return (
    <div>
      <img className="img" src="/background.png" />
      <div className="main">
        <Header />
        <CreateArea onAdd={addTodo} />
        <div className="todo">
          {todos.map((todo, index) => (
            <Todo key={index} onDelete={deleteTodo} id={index} content={todo} />
          ))}
          <div className="todo-footer">
            <p>{todos.length} items left</p>
            <p style={{ cursor: "pointer" }}>Clear completed</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
