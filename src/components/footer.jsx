import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-2xl bg-solidblack">
      <div className=" md:p-4 text-white">
        <nav className="flex flex-col md:pl-2 md:flex-row text-white">
          <ul className="flex flex-row w-4/6 mx-auto space-x-8 text-lg text-white justify-center md:space-x-4 md:justify-normal md:text-2xl">
            <li className="">
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li className="">
              <a href="#" className="">
                Subscribe
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
          </ul>
          <div className="">
            <div className="flex flex-row w-4/5 mx-auto space-x-8 justify-center md:text-4xl">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaEnvelope />
              <FaXTwitter />
            </div>
          </div>
        </nav>
        <p className="text-base text-center">
          &copy; {new Date().getFullYear()} John Qurix Web. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
