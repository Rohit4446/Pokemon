import React from "raect";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink className="navlink" to="pokemon">
        Pokemon
      </NavLink>
      <NavLink className="navlink" to="review">
        Reviews
      </NavLink>
      <NavLink className="navlink" to="accordion">
        Accordion
      </NavLink>
      <NavLink className="navlink" to="menuapp">
        Menu App
      </NavLink>
    </div>
  );
};

export default Header;
