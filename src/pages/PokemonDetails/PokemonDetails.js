import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import "./pokemonIndividual.css";
import capitalizeName from "../../utils/capitalizeName";
import colors from "../../utils/types";

export async function loader({ params }) {
  return params.pokemonId;
}

//const TABS_COMPONENTS = {
//forms: <Form />,
//details: <Details />,
//type: <Types />,
//stats: <Stats />,
//wear: <Wear/>

//};

const PokemonDetails = () => {
  const [tab, setTab] = useState("forms");

  const pokemonId = useLoaderData();
  const url = `http://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const [pokemon, setPokemon] = useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, []);
  console.log(pokemon);

  if (!pokemon) {
    return <div>Loading</div>;
  }

  return (
    <div className="root" >
      <div className="exhaust">
        <div className="group">
          <div className="groupId">N{pokemon.id}</div>
          <div className="groupName">{capitalizeName(pokemon.name)}</div>
        </div>
        <div>
        <div className="types">
        

         {pokemon.types.map((x) => (
            <div
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
        <div className="pictureInd">
          <img src={pokemon.sprites.other.dream_world.front_default}/>
        </div>
        <div className="third">
          <div className="info">
            <div onClick={() => setTab("forms")}>
              Evolutions
              <div className="evolutions">A</div>
            </div>{" "}
            <div onClick={() => setTab("details")}>Details</div>{" "}
            <div onClick={() => setTab("types")}>Types</div>{" "}
            <div onClick={() => setTab("Stats")}>Stats</div>{" "}
            <div onClick={() => setTab("Wear")}>Wear</div>{" "}
          </div>
          <div className="descrip">First evolution</div>
        </div>
      </div>
    </div>
  );
};
export default PokemonDetails;
