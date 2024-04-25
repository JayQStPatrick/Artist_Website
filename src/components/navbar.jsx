import React from "react";
import "../navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
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
            <input type="text" placeholder="Search.." name="search" />
            <button className="" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
