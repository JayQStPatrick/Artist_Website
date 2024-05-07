import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import ChrisBrown from "../media/ChrisBrown.png";
import Pac from "../media/Pac.png";
import SantanDave from "../media/SantanDave.png";
import SnoopDogg from "../media/SnoopDogg.png";
import Finished from "../media/finished_two.jpg";

// Creating usestates
const Catalogue_tab = () => {
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
          src={Finished}
          alt="landing"
          className="bg-cover bg-center bg-repeat-x w-full"
        />
      </div>
      {/* Catalogue first row */}
      <div className="flex flex-row p-8 bg-neutral-600">
        <div class="p-8 m-8 max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={ChrisBrown} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center font-serif">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-black p-4 text-white text-lg w-3/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
        <div class="p-8 m-8 max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-black p-4 text-white text-lg w-3/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
        <div class="p-8 m-8 max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={SantanDave} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-black p-4 text-white text-lg w-3/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
      </div>
      {/* Catalogue second row */}
      <div className="flex flex-row p-8 bg-neutral-600">
        <div class="p-8 m-8 max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={SnoopDogg} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-black p-4 text-white text-lg w-3/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
        <div class="p-8 m-8 max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={ChrisBrown} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-black p-4 text-white text-lg w-3/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
        <div class="p-8 m-8 max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={Pac} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-black p-4 text-white text-lg w-3/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue_tab;
