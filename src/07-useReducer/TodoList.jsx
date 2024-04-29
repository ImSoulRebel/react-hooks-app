/* eslint-disable react/prop-types */
import PropType from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

TodoList.proptype = {
  todos: PropType.array.isRequired,
  onDeleteTodo: PropType.func.isRequired,
  onToggleTodo: PropType.func.isRequired,
  ToggleTodo: PropType.func.isRequired,
};
