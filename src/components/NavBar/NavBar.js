import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import flippedLogo from "../../assets/pdf-logo-cuadrado-flipped.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="flippedLogo" alt="flipped-logo" src={flippedLogo} />
      </Link>
      <div>
        <ul className="categoryList">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/tortas">Tortas</Link>
          </li>
          <li>
            <Link to="/category/budines">Budines</Link>
          </li>
          <li>
            <Link to="/category/brownies">Brownies</Link>
          </li>
          <li>
            <Link to="/category/cookies">Cookies</Link>
          </li>
          <li>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
