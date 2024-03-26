import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCoustomHook = () => {
  const { formState, username, email, password, onInputChange, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  useEffect(() => {
    console.log("useEffect first called");
  }, []);

  useEffect(() => {
    console.log("useEffect formState changed");
  }, [formState]);

  useEffect(() => {
    console.log("useEffect email changed");
  }, [email]);

  return (
    <>
      <h1>CustomHook Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={() => onResetForm()} className="btn btn-primary mt-2">
        {" "}
        Reset
      </button>
      {username === "strider2" && <Message />}
    </>
  );
};
