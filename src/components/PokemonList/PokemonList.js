import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonDetails from "../PokemonDetails";
import "./pokemon-list.css";

const url = "https://pokeapi.co/api/v2/pokemon?limit=600";

async function getPokemonData(pokemon) {
  const response = await axios.get(pokemon.url);
  return response.data;
}

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(url);
        const promises = response.data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon);
        });
        const results = await Promise.all(promises);
        setPokemonList(results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPokemons();
  }, []);

  return (
    <div className="container">
      {pokemonList.map((pokemon) => {
        console.log(pokemon);

        return (
          <PokemonDetails
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            picture={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
}

export default PokemonList;
