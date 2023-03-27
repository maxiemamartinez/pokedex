import React, { useState, useEffect } from "react";
import axios from "axios";
import colors from "../../utils/types";
import { useLoaderData } from "react-router-dom";
import COLORS from "../../utils/types";

function getEvolutions(evolutions, currentName) {
  let evolutionsArray = [];
  let chain = evolutions.chain;

  const getId = (url) => url.split("/").at(-2);

  while (chain) {
    if (chain.species.name !== currentName) {
      evolutionsArray.push({
        id: getId(chain.species.url),
        name: chain.species.name,
      });
    }

    chain = chain.evolves_to[0];
  }

  return evolutionsArray;
}

const buildPicture = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

const PokemonEvolution = ({ onEvolutionClick }) => {
  const pokemonId = useLoaderData();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const [evolutions, setEvolutions] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      const speciesUrl = response.data.species.url;
      axios.get(speciesUrl).then((speciesResponse) => {
        const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
        axios.get(evolutionChainUrl).then((evolutionResponse) => {
          const parsedEvolutions = getEvolutions(
            evolutionResponse.data,
            response.data.name
          );
          setEvolutions(parsedEvolutions);
        });
      });
    });
  }, [url]);

  if (!evolutions) {
    return <div>Loading</div>;
  }
  return evolutions.map((evolution) => (
    <div key={evolution.name}>
      {" "}
      <img
        className="evolutionPic"
        onClick={() => onEvolutionClick(buildPicture(evolution.id))}
        style={{ background: COLORS[pokemon.types[0].type.name], opacity: 0.8 }}
        src={buildPicture(evolution.id)}
      />
    </div>
  ));
};
export default PokemonEvolution;
