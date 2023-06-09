import { useLoaderData } from "react-router-dom";
import axios from "axios";
import "./pokemonIndividual.css";
import React, { useEffect, useState } from "react";
import capitalizeName from "../../utils/capitalizeName";
import colors from "../../utils/types";
import PokemonEvolution from "./PokemonEvolution";
import Description from "../../components/Description";

export async function loader({ params }) {
  return params.pokemonId;
}
const PokemonDetails = () => {
  const [tab, setTab] = useState("");

  const pokemonId = useLoaderData();
  const url = `http://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);
  if (!pokemon) {
    return <div>Loading</div>;
  }

  return (
    <div className="root">
      <div className="exhaust">
        <div className="group">
          <div className="groupId">N{pokemon.id}</div>
          <div className="groupName">{capitalizeName(pokemon.name)}</div>
        </div>
        <div>
          <div className="types">
            {pokemon.types.map((x) => (
              <div
                className="type"
                key={x.type.name}
                style={{ backgroundColor: colors[x.type.name] }}
              >
                {capitalizeName(x.type.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sec">
        <div
          className="pictureInd"
          style={{
            background: colors[pokemon.types[0].type.name],
            opacity: 0.8,
          }}
        >
          <img
            src={
              selectedPokemon || pokemon.sprites.other.dream_world.front_default
            }
          />
        </div>
        <div className="third">
          <div className="info">
            <div className="bar" onClick={() => setTab("forms")}>
              Evolutions
            </div>{" "}
            <div onClick={() => setTab("details")}>Details</div>{" "}
          </div>
          <div className="results">
            {tab === "forms" && (
              <PokemonEvolution onEvolutionClick={setSelectedPokemon} />
            )}
            {tab === "details" && <Description />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonDetails;
