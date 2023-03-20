import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import "./pokemonIndividual.css";
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
  const [pokemon, setPokemon] = useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, []);
  console.log(pokemon);

  return (
    <div className="a">
      <div className="exhaust">
      <div className="group">
        <div>N  6</div>
        <div>Charizard</div>
      <div className="types">types</div>
      </div>
      </div>
      <div className="sec"> 
      <div className="pictureInd">Picture</div>
      <div className="info">
        <div onClick={() => setTab("forms")}>Forms</div>{" "}
        <div onClick={() => setTab("details")}>Details</div> {" "}
        <div onClick={() => setTab("types")}>Types</div>{" "}
        <div onClick={() => setTab("Stats")}>Stats</div>{" "}
        <div onClick={() => setTab("Wear")}>Wear</div>{" "}
      <div className="descrip">description</div>
      </div>
      </div>
      </div>
  );
};
export default PokemonDetails;
