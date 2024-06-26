import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes, FaMagnifyingGlass } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "../navbar.css";
import Catalogue from "../components/catalogue_tab";
import Events from "../components/events_tab";
import Merch from "../components/merch_tab";
import News from "../components/news_tab";
import Videos from "../components/videos_tab";

const Navbar = ({ hasBackground }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav
      style={{
        backgroundColor: hasBackground ? "rgba(0, 0, 0, 0.5)" : "transparent",
        position: "fixed",
        width: "100%",
        zIndex: 100,
      }}
      className="container h-1/6 px-8"
    >
      {/* Brand Name */}
      <div className="brand">JayQ St.Patrick</div>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* Navbar Items */}
      <ul className={click ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={closeMobileMenu}
            className="text-solidwhite hover:text-grey nav-link"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/catalogue_tab"
            activeClassName="active"
            onClick={closeMobileMenu}
            className="text-solidwhite hover:text-grey nav-link"
          >
            Catalogue
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/videos_tab"
            activeClassName="active"
            onClick={closeMobileMenu}
            className="text-solidwhite hover:text-grey nav-link"
          >
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events_tab"
            activeClassName="active"
            onClick={closeMobileMenu}
            className="text-solidwhite hover:text-grey nav-link"
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/merch_tab"
            activeClassName="active"
            onClick={closeMobileMenu}
            className="text-solidwhite hover:text-grey nav-link"
          >
            Merch
          </NavLink>
        </li>
      </ul>
      {/* Search Bar */}
      <div className="search-container">
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
