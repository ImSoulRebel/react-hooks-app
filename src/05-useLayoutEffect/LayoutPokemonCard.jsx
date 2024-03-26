import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const LayoutPokemonCard = ({ id, name, sprites = [] }) => {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const divRef = useRef();

  useLayoutEffect(() => {
    const { height, width } = divRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <>
      <section style={{ display: "flex" }}>
        <h2 className="text-capitalize">
          # {id} - {name}
        </h2>
        <div ref={divRef}>
          {sprites.map((sprite) => (
            <img key={sprite} src={sprite} alt={name}></img>
          ))}
        </div>
      </section>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

LayoutPokemonCard.proptypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired,
};
