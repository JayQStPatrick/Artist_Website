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
      <div className="flex flex-col bg-neutral-600">
        <div class="mx-auto w-1/2 md:flex md:flex-col md:w-1/5 lg:w-1/3 rounded overflow-hidden shadow-lg">
          <div className="">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="">
            <div class="font-bold text-xl p-4 text-center">
              The Coldest Sunset
            </div>
            <p class="text-base text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center">
              <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                PLAY
              </button>
            </div>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:flex-col md:w-1/5 lg:w-1/3 rounded overflow-hidden shadow-lg">
          <div className="">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="">
            <div class="font-bold text-xl p-4 text-center">
              The Coldest Sunset
            </div>
            <p class="text-base text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center py-2">
              <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Catalogue second row */}
      <div className="">
        <div class="p-10">
          <div className="">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="">
            <div class="font-bold text-xl p-4 text-center">
              The Coldest Sunset
            </div>
            <p class="text-base text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center py-2">
              <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                PLAY
              </button>
            </div>
          </div>
        </div>
        <div class="p-10">
          <div className="">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="">
            <div class="font-bold text-xl p-4 text-center">
              The Coldest Sunset
            </div>
            <p class="text-base text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center py-2">
              <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Catalogue third row */}
      <div className="">
        <div class="p-10">
          <div className="">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="">
            <div class="font-bold text-xl p-4 text-center">
              The Coldest Sunset
            </div>
            <p class="text-base text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center py-2">
              <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                PLAY
              </button>
            </div>
          </div>
        </div>
        <div class="p-10">
          <div className="">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="">
            <div class="font-bold text-xl p-4 text-center">
              The Coldest Sunset
            </div>
            <p class="text-base text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center py-2">
              <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Catalogue fourth row */}
      <div className="lg:p-5">
        <div class="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left lg:w-2/5">
          <div className="md:w-1/2 md:p-3">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="md:w-3/4 md:p-3">
            <div class="font-bold text-xl p-4 text-center">
              The Coldest Sunset
            </div>
            <p class="text-base text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center py-2">
              <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                PLAY
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-right lg:w-2/5">
          <div className="md:w-1/2 md:p-3">
            <img class="w-full" src={Pac} alt="HipHop Artist" />
          </div>
          <div class="md:w-3/4 md:p-3">
            <div class="font-bold text-xl p-4 text-center">
              The Coldest Sunset
            </div>
            <p class="text-base text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div class="text-center py-2">
              <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
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
