import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoApp } from "./07-useReducer/TodoApp";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { MemoHook } from "./06-memos/MemoHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FormWithCoustomHook } from "./02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { CounterApp } from "./01-useState/CounterApp";
// import { HooksApp } from "./HooksApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
