import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <PokemonList />
    </div>
  );
}

export default App;
