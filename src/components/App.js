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

  function checkedTodo(todo) {
    const newTodos = [...todos];
    newTodos[todo].isDone = true;
    setTodos(newTodos);
  }

  function uncheckedTodo(todo) {
    const newTodos = [...todos];
    newTodos[todo].isDone = false;
    setTodos(newTodos);
  }

  function clearComplete() {
    const newTodo = todos.filter((todoItem) => {
      return !todoItem.isDone;
    });
    setTodos(newTodo);
  }

  return (
    <div>
      <img className="img" src="/background.png" />
      <div className="main">
        <Header />
        <CreateArea onAdd={addTodo} />
        <div className="todo">
          {todos.map((todo, index) => (
            <Todo
              key={todo.content}
              onDelete={deleteTodo}
              onChecked={checkedTodo}
              onUnchecked={uncheckedTodo}
              id={index}
              content={todo.content}
            />
          ))}
          <div className="todo-footer">
            <p>{todos.length} items left</p>
            <p onClick={clearComplete} style={{ cursor: "pointer" }}>
              Clear completed
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
