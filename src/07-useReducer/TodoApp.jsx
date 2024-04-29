import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/index";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    onDeleteTodo,
    onToggleTodo,
    onNewTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
