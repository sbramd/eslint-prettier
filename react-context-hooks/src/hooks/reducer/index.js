import React, { useState, useContext } from "react";
import TodoContextProvider, { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add-todo", text });
        setText("");
      }}
    >
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </form>
  );
};

const TodoList = () => {
  const {
    state: { todos, todoCount },
    dispatch,
  } = useContext(TodoContext);

  return (
    <>
      <div>number of todos: {todoCount}</div>
      {todos.map((t, idx) => (
        <div
          key={t.id}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
    </>
  );
};

const Reducer = () => {
  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
  );
};

export default Reducer;
