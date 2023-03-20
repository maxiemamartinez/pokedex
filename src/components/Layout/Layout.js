import React, { useState} from "react";

import Header from "../Header";
import PokemonList from "../PokemonList";
import SearchBar from "../SearchBar";

const Layout = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  return (
    <div>
      <div className="body">
        <Header />
        <SearchBar onChange={handleChange} value={input} />
        <PokemonList filter={input} />
      </div>
    </div>
  );
};

export default Layout;
