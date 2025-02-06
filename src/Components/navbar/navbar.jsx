import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/ommig">Om Mig</Link></li>
        <li><Link to="/projekt">Projekt</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
