import React, { useState, useEffect } from "react";
import axios from "axios";
import colors from "../../utils/types";
import { useLoaderData } from "react-router-dom";

function getEvolutions(evolutions) {
  let evolutionsArray = [];
  let chain = evolutions.chain;

  while (chain) {
    evolutionsArray.push(chain.species.name);
    chain = chain.evolves_to[0];
  }

  return evolutionsArray;
}

const PokemonEvolution = () => {
  const pokemonId = useLoaderData();
  const url = `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`;
  const [evolutions, setEvolutions] = useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      const parsedEvolutions = getEvolutions(response.data);
      setEvolutions(parsedEvolutions);
    });
  }, [url]);

  if (!evolutions) {
    return <div>Loading</div>;
  }

  console.log("HERE CHECKING", evolutions);

  return evolutions;

};
export default PokemonEvolution;
