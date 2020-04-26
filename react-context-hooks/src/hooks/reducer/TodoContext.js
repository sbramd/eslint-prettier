import React, { createContext, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext();

const initializationFn = (initialArg) => initialArg;
const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(
    todoReducer,
    {
      todos: [],
      todoCount: 0,
    },
    initializationFn
  );

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
