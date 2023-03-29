import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import '../../pages/PokemonDetails/pokemonIndividual.css'

const Description = () => {
  const url = "https://pokeapi.co/api/v2/characteristic/1/";
  const [descrip, setDescrip] = useState([]);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setDescrip(response.data.descriptions);
    });
  }, [url]);
  console.log("here", descrip);
  if (!descrip) {
    return <div>Loading</div>;
  }
  const language = descrip.find((x) => x.language.name === "en");

  return <div className="result">{language?.description}</div>;
};

export default Description;
