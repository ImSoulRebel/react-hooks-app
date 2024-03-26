import Proptypes from "prop-types";

export const ShowIncrement = ({ increment }) => {
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Increment
    </button>
  );
};

ShowIncrement.propTypes = {
  increment: Proptypes.func.isRequired,
};
