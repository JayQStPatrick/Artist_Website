import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import ChrisBrown from "../media/ChrisBrown.png";
import Pac from "../media/Pac.png";
import SantanDave from "../media/SantanDave.png";
import SnoopDogg from "../media/SnoopDogg.png";
import Meek from "../media/meek.png";
import Subscribe from "./subscribe/subscribe";

// Creating usestates
const News_tab = () => {
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
          src={Meek}
          alt="landing"
          className="bg-cover bg-center bg-repeat-x w-full"
        />
      </div>
      {/* News first row */}
      <div className="flex flex-col md:flex-row md:p-6 md:grid-cols-3 md:gap-4">
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={ChrisBrown} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center font-serif">
              The Boy From KD
            </div>
            <p class="text-lg text-center">
              A nostalgic mixtape blending Afrobeat rhythms and soulful
              melodies, capturing the essence of a boy from Kaduna.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl">
              Download
            </button>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={ChrisBrown} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center font-serif">
              Corporate
            </div>
            <p class="text-lg text-center">
              Corporate by JayQ St. Patrick delivers a hard-hitting, energetic
              anthem exploring the dynamics of ambition and power in business.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={ChrisBrown} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center font-serif">
              Ontop
            </div>
            <p class="text-lg text-center">
              JayQ St. Patrick's 'Ontop' is a soulful love track, celebrating
              passion and connection with mesmerizing melodies.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
      </div>
      {/* News second row */}
      <div className="flex flex-col md:flex-row md:p-6 md:grid-cols-3 md:gap-4">
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={ChrisBrown} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center font-serif">
              Jara
            </div>
            <p class="text-lg text-center">
              "Jara" by JayQ St. Patrick featuring Trimz is an uplifting anthem
              of resilience, joy, and unity, inspiring hearts worldwide.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={ChrisBrown} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center font-serif">
              My Shoulder
            </div>
            <p class="text-lg text-center">
              "My Shoulder" by JayQ St. Patrick featuring Geekay and ESK is a
              powerful hip hop track celebrating brotherhood, loyalty, and
              unwavering support through life's challenges.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={ChrisBrown} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center font-serif">
              Lemon Pepper Freestyle
            </div>
            <p class="text-lg text-center">
              "Lemon Pepper" by JayQ St. Patrick: A raw, emotional freestyle
              exploring life's hardships, resilience, and triumph through
              powerful, heartfelt lyrics.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl">
              PLAY
            </button>
          </div>
        </div>
      </div>
      {/* <Subscribe /> */}
    </div>
  );
};

export default News_tab;
