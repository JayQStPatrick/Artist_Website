import React, { useState, useEffect } from "react";
import "../navbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = ({ hasBackground }) => {
  return (
    <nav
      style={{
        backgroundColor: hasBackground ? "rgba(0, 0, 0, 0.5)" : "transparent",
        position: "fixed",
        width: "100%",
        zIndex: 100,
      }}
      className="container"
    >
      {/* Brand Name */}
      <div className="brand">JayQ St.Patrick</div>
      {/* Navbar Items */}
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
      {/* Search Bar */}
      <div class="search-container">
        <form action="/action_page.php">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="rounded-lg"
          />
          <button className="rounded-lg p-8 w-6 h-7 text-center" type="submit">
            <FaMagnifyingGlass />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
