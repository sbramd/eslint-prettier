import { v1 as uuid } from "uuid";

export function todoReducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          { id: uuid(), text: action.text, completed: false },
        ],
        todoCount: state.todoCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
}
