import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-2xl bg-black">
      <div className="text-white">
        <nav className="flex flex-row pl-4 text-white">
          <ul className="flex flex-row w-1/2 space-x-8 text-white">
            <li className="">
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li className="mr-4">
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
          <div className="w-1/2 ">
            <div className="flex flex-row pr-0 space-x-8">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaEnvelope />
              <FaXTwitter />
            </div>
          </div>
        </nav>
        <p className="">
          &copy; {new Date().getFullYear()} John Qurix Web. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
