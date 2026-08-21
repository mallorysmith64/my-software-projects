import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          My Software Projects
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;