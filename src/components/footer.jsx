// src/components/footer/Footer.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Subscribe from "./subscribe/subscribe";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const [hit, setHit] = useState(false);
  const handleClick = () => setHit(!hit);

  // Disable scrolling when the overlay is shown
  useEffect(() => {
    if (hit) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow style
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hit]);

  // Handle clicking outside the subscribe component to close it
  const handleOverlayClick = (e) => {
    if (e.target.id === "subscribe-overlay") {
      setHit(false);
    }
  };

  return (
    <>
      <footer className="text-2xl bg-solidblack">
        <div className="md:p-4 text-white">
          <nav className="flex flex-col md:pl-2 md:flex-row text-white">
            <ul className="flex flex-row w-4/6 mx-auto space-x-8 text-lg text-white justify-center md:space-x-4 md:justify-normal md:text-2xl">
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/about"
                  className="text-white"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  onClick={handleClick}
                  className="text-white"
                >
                  Subscribe
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/contact"
                  className="text-white"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div>
              <div className="flex flex-row w-4/5 mx-auto space-x-8 justify-center md:text-4xl">
                <a
                  href="https://www.facebook.com/profile.php?id=100009407049622&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/jayq_gram?igsh=MXpyanZqemN1eTY="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/@JayQSt.Patrick"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a href="mailto:hearmeoutjayq@gmail.com">
                  <FaEnvelope />
                </a>
                <a
                  href="https://x.com/JayQ_Tweet?t=Sqxiezedgu7oJWMZpPAl4A&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </nav>
          <p className="text-base text-center">
            &copy; {new Date().getFullYear()} John Qurix Web. All Rights
            Reserved.
          </p>
        </div>
      </footer>
      {hit && (
        <div
          id="subscribe-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-4 rounded shadow-lg relative">
            <button
              className="absolute top-1 right-1 text-4xl text-thickred rounded-lg"
              onClick={handleClick}
            >
              &times;
            </button>
            <Subscribe />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
