import { LayoutPokemonCard } from "../05-useLayoutEffect/LayoutPokemonCard";
import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
// import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data, hasError, isLoading } = useFetch(url);
  console.log(data);
  return (
    <>
      <h1>Pokemon information</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        // <PokemonCard
        <LayoutPokemonCard
          id={data?.id}
          name={data?.name}
          sprites={[
            data?.sprites.front_default,
            data?.sprites.front_shiny,
            data?.sprites.back_default,
            data?.sprites.back_shiny,
          ]}
        />
      )}
      <h2>{data?.name}</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Previous
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Next
      </button>
    </>
  );
};
