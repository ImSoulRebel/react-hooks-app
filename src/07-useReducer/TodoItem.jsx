/* eslint-disable react/prop-types */
import PropType from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between"
      onClick={() => onToggleTodo(todo.id)}
    >
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.protype = {
  todo: PropType.object.isRequired,
  onDeleteTodo: PropType.func.isRequired,
  onToggleTodo: PropType.func.isRequired,
};
