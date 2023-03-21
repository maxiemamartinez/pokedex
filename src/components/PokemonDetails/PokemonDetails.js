import React from "react";
import colors from "../../utils/types";
import capitalizeName from "../../utils/capitalizeName";
import { useNavigate } from "react-router-dom";

import "./pokemon-details.css";

function PokemonDetails({ id, name, picture, types }) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/pokemons/${id}`);

  return (
    <div onClick={handleNavigate}>
      <div
        className="picture"
        style={{ background: colors[types[0].type.name], opacity: 0.8 }}
      >
        <img className="avatar" src={picture} />
      </div>
      <div className="description">
        <div>N {id}</div>
        <div className="names">{capitalizeName(name)}</div>
        <div className="pokemon-type">
          {types.map((x) => (
            <div
              className="pokemon-style"
              key={x.type.name}
              style={{ backgroundColor: colors[x.type.name] }}
            >
              {capitalizeName(x.type.name)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
