import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import PokemonDetails from "../PokemonDetails";
import "./pokemon-list.css";

const url = "https://pokeapi.co/api/v2/pokemon?limit=600";

async function getPokemonData(pokemon) {
  const response = await axios.get(pokemon.url);
  return response.data;
}

function PokemonList({ filter }) {
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

  const pokemons = useMemo(() => {
    if (filter.length > 0 ) {
      return pokemonList.filter((x) => x.name.includes(filter));
    }

    return pokemonList;
  }, [filter, pokemonList]);

  return (
    <div className="container">
      {pokemons.map((pokemon) => {
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
