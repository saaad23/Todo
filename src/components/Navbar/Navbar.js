import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <button className="new-btn">+ New List</button>

        <p className="nav-brand">To-dos</p>
        <ul className="main-nav" id="js-menu">
          <li>
            <button className="nav-btn">Buy Now</button>
          </li>
        </ul>
      </nav>
      <br className="line-break" />
    </div>
  );
};

export default Navbar;
