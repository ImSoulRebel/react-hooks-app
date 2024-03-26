import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "strider",
    email: " pepito@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

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
      <h1>Simple Form</h1>
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
        placeholder="Emal"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "strider2" && <Message />}
    </>
  );
};
