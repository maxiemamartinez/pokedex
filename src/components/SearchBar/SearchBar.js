import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import {BsFilter} from 'react-icons/bs';
import './search-bar.css';

function SearchBar() {
    return (
        <div className="searchbar">
            <h1>Pokedex</h1>
            <p>Search for a Pokemon by name or using its National Pokedex number.</p>
            <div className="filter-box">
                <AiOutlineSearch className="icon" size={25}/>
                <input className="input" type='text' placeholder="Name or number" />
                <div className="filter">
                    <BsFilter size={35}/>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;