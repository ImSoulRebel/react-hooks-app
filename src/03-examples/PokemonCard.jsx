import PropTypes from "prop-types";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ display: "flex" }}>
      <h2 className="text-capitalize">
        # {id} - {name}
      </h2>
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name}></img>
        ))}
      </div>
    </section>
  );
};

PokemonCard.proptypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired,
};
