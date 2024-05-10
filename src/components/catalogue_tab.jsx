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
      <div className="flex flex-row bg-neutral-600">
        <div class=" m-8  rounded overflow-hidden shadow-lg flex flex-row w-2/5 mx-auto h-3/5">
          <div className="w-1/2 p-6">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="w-1/2">
            <div class="font-bold text-xl p-4 text-center h-1/6">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center p-4 h-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center h-1/5">
              <button className="bg-black text-white text-lg w-1/3 rounded-2xl mt-4">
                PLAY
              </button>
            </div>
          </div>
        </div>
        <div class=" m-8  rounded overflow-hidden shadow-lg flex flex-row w-2/5 mx-auto h-3/5">
          <div className="w-1/2 p-6">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="w-1/2">
            <div class="font-bold text-xl p-4 text-center h-1/6">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center p-4 h-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center h-1/5">
              <button className="bg-black text-white text-lg w-1/3 rounded-2xl mt-4">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Catalogue second row */}
      <div className="flex flex-row p-8 bg-neutral-600">
        <div class=" m-8  rounded overflow-hidden shadow-lg flex flex-row w-2/5 mx-auto h-3/5">
          <div className="w-1/2 p-6">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="w-1/2">
            <div class="font-bold text-xl p-4 text-center h-1/6">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center p-4 h-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center h-1/5">
              <button className="bg-black text-white text-lg w-1/3 rounded-2xl mt-4">
                PLAY
              </button>
            </div>
          </div>
        </div>
        <div class=" m-8  rounded overflow-hidden shadow-lg flex flex-row w-2/5 mx-auto h-3/5">
          <div className="w-1/2 p-6">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="w-1/2">
            <div class="font-bold text-xl p-4 text-center h-1/6">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center p-4 h-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center h-1/5">
              <button className="bg-black text-white text-lg w-1/3 rounded-2xl mt-4">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Catalogue third row */}
      <div className="flex flex-row p-8 bg-neutral-600">
        <div class=" m-8  rounded overflow-hidden shadow-lg flex flex-row w-2/5 mx-auto h-3/5">
          <div className="w-1/2 p-6">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="w-1/2">
            <div class="font-bold text-xl p-4 text-center h-1/6">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center p-4 h-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center h-1/5">
              <button className="bg-black text-white text-lg w-1/3 rounded-2xl mt-4">
                PLAY
              </button>
            </div>
          </div>
        </div>
        <div class=" m-8  rounded overflow-hidden shadow-lg flex flex-row w-2/5 mx-auto h-3/5">
          <div className="w-1/2 p-6">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="w-1/2">
            <div class="font-bold text-xl p-4 text-center h-1/6">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center p-4 h-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center h-1/5">
              <button className="bg-black text-white text-lg w-1/3 rounded-2xl mt-4">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Catalogue fourth row */}
      <div className="flex flex-row p-8 bg-neutral-600">
        <div class=" m-8  rounded overflow-hidden shadow-lg flex flex-row w-2/5 mx-auto h-3/5">
          <div className="w-1/2 p-6">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="w-1/2">
            <div class="font-bold text-xl p-4 text-center h-1/6">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center p-4 h-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center h-1/5">
              <button className="bg-black text-white text-lg w-1/3 rounded-2xl mt-4">
                PLAY
              </button>
            </div>
          </div>
        </div>
        <div class=" m-8  rounded overflow-hidden shadow-lg flex flex-row w-2/5 mx-auto h-3/5">
          <div className="w-1/2 p-6">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="w-1/2">
            <div class="font-bold text-xl p-4 text-center h-1/6">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base text-center p-4 h-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center h-1/5">
              <button className="bg-black text-white text-lg w-1/3 rounded-2xl mt-4">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue_tab;
