import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { FaChevronRight } from "react-icons/fa6";
import ChrisBrown from "../media/ChrisBrown.png";
import Pac from "../media/Pac.png";
import SantanDave from "../media/SantanDave.png";
import SnoopDogg from "../media/SnoopDogg.png";
import JayQ2 from "../media/JayQ2.jpeg";

// Creating usestates
const Videos_tab = () => {
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
    <div className="bg-bgblue">
      <Navbar hasBackground={hasBackground} />
      <div className="">
        <img
          src={JayQ2}
          alt="landing"
          className="bg-cover bg-center bg-repeat-x w-full h-1/6"
        />
      </div>
      {/* Videos first row */}
      <div className="flex flex-col w-1/2 mx-auto md:flex-row grid md:w-4/5 md:grid-cols-3 md:gap-2 lg:w-3/4 lg:grid-cols-4 lg:gap-1">
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
      </div>
      {/* Videos second row */}
      <div className="flex flex-col w-1/2 mx-auto md:flex-row grid md:w-4/5 md:grid-cols-3 md:gap-2 lg:w-3/4 lg:grid-cols-4 lg:gap-1">
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
      </div>
      {/* Videos Third row */}
      <div className="flex flex-col w-1/2 mx-auto md:flex-row grid md:w-4/5 md:grid-cols-3 md:gap-2 lg:w-3/4 lg:grid-cols-4 lg:gap-1">
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
          </div>
        </div>
        <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
            <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
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

export default Videos_tab;
