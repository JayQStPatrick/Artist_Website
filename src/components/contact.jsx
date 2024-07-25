import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { FaChevronRight } from "react-icons/fa6";
// import ChrisBrown from "../media/ChrisBrown.png";
import Pac from "../media/Pac.png";
// import SantanDave from "../media/SantanDave.png";
// import SnoopDogg from "../media/SnoopDogg.png";

// Creating usestates
const Contact = () => {
  const [hasBackground, setHasBackground] = useState(false);

  // Using the usestate to determine the background of navbar while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <Navbar hasBackground={hasBackground} />
      <div className="">
        <img
          src={Pac}
          alt="landing"
          className="bg-cover bg-center bg-repeat-x w-full h-1/6"
        />
      </div>
      {/* Videos first row */}
      <div className="flex flex-col bg-neutral-600 md:flex-row grid md:grid-cols-3 md:gap-4">
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
      </div>
      {/* Videos second row */}
      <div className="flex flex-col bg-neutral-600 md:flex-row grid md:grid-cols-3 md:gap-4">
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
      </div>
      {/* Videos Third row */}
      <div className="flex flex-col bg-neutral-600 md:flex-row grid md:grid-cols-3 md:gap-4">
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-8 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-hoverblue text-7xl md:text-8xl" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
