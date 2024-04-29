import { useEffect, useReducer } from "react";
import { todoReducer } from "../07-useReducer/todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: " Recolectar la piedra del alma",
  //   done: false,
  // }
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init);

  const onNewTodo = (todo) => {
    const action = {
      type: "add_todo",
      payload: todo,
    };
    dispatchTodos(action);
  };

  const onDeleteTodo = (id) => {
    const action = {
      type: "delete_todo",
      payload: id,
    };
    dispatchTodos(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: "toggle_todo",
      payload: id,
    };
    dispatchTodos(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
