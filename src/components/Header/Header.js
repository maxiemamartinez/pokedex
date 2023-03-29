import React from "react";
import { TbPokeball } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import "../../index.css";
import './header.css'
function Header() {
  return (
    <div className="header">
      <TbPokeball className="pokeball" size={70} />
      <BsPerson className="person" size={70} />
    </div>
  );
}
export default Header;
