import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import './search-bar.css';

function SearchBar({ onChange, value }) {
    return (
        <div className="searchbar">
            <h1>Pokedex</h1>
            <p>Search for a Pokemon by name or using its National Pokedex number.</p>
            <div className="filter-box">
                <AiOutlineSearch className="icon" size={25}/>
                <input className="input" onChange={onChange} type='text' placeholder="Name or number" value={value} />
                </div>
            </div>
    )
}
export default SearchBar;