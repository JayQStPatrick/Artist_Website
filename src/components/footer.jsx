import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="">
        <nav>
          <ul className="">
            <li className="">
              <a
                href="#"
                className="list-none no-underline text-gray-300 hover:text-white"
              >
                Home
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website Name. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
