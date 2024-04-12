import React from "react";
import "../navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">JayQ St.Patrick</div>
        <ul className="nav-links">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              News
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Catalogue
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Videos
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Merch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
