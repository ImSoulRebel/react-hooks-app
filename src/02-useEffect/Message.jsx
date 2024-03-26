import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message mounted");
    return () => {
      console.log("Message unmounted");
    };
  }, []);

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User exist</h3>
    </>
  );
};
