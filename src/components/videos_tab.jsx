import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { FaChevronRight } from "react-icons/fa6";
import JayQ2 from "../media/JayQ2.jpeg";
import TBFKD from "../media/TBFKDcover.jpg";
import ontop from "../media/OntopCover.png";
import lemonpepper from "../media/LemonPepperCover.png";
import cb1 from "../media/cb1.jpeg";
import cb2 from "../media/cb2.jpeg";
import cb3 from "../media/cb3.jpeg";
import cb4 from "../media/cb4.jpeg";
import leaveyourx from "../media/leaveyourx.jpeg";
import stain from "../media/stain.jpeg";
import samegenes from "../media/samegenes.jpeg";
import writelikeladipoe from "../media/writelikeladipoe.jpeg";
import crownofclay from "../media/CrownofclayCover.png";

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

  // const redirect = (url) => {
  //   window.open = ("url", "_blank", "noopener,noreferrer");
  // };
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
        <a
          href="https://youtu.be/rNb1fm2DDQk?si=EMsMuy3rx0yVSEl1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white">
            <div className="block">
              <img class="w-full" src={lemonpepper} alt="HipHop Artist" />
              <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
                <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">
                  Lemon Pepper Freestyle
                </div>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtu.be/mVmvvVGQLfQ?si=tKp4M_vtj-abYZDZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={ontop} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Ontop (Viral Video)
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.instagram.com/reel/C8qxGP0saF-/?igsh=MWQwbnVxZDNjM3o0NQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={TBFKD} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                The Boy From KD (Viral Video)
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtu.be/kslcg2BVyAg?si=o8cKK6t87jN5jCA7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={samegenes} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Same Genes Freestyle
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* Videos second row */}
      <div className="flex flex-col w-1/2 mx-auto md:flex-row grid md:w-4/5 md:grid-cols-3 md:gap-2 lg:w-3/4 lg:grid-cols-4 lg:gap-1">
        <a
          href="https://youtu.be/WiH_JQ0Gg8A?si=AO4zxS-FxV7BMcAb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={stain} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Stain Freestyle
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtu.be/ehNkxZEMYrA?si=GHe8lxaqE2lLzMsg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={writelikeladipoe} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                How to write like Ladipoe
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtu.be/HeT-SJOVu5M?si=HdW3h0HTS_NRpatA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={leaveyourx} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Leave your Ex
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.instagram.com/tv/CSe0-GnFiSE/?igsh=eGp0ZThjc3BvcGo5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={crownofclay} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Crown of Clay
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* Videos Third row */}
      <div className="flex flex-col w-1/2 mx-auto md:flex-row grid md:w-4/5 md:grid-cols-3 md:gap-2 lg:w-3/4 lg:grid-cols-4 lg:gap-1">
        <a
          href="https://youtu.be/9OcXZzhXUkY?si=82HHU1lP1m4fA7eV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={cb1} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Closet Bars Episode 1
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtu.be/pb_gTSJZ5mM?si=T3Wf2JeQqRp2dvNc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={cb2} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Closet Bars Episode 2
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtu.be/d__1UvrPt3Y?si=Nb_tZ87rh5O36Dm9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={cb3} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Closet Bars Episode 3
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtu.be/dHTcz91TtJE?si=zUXTDSyu471f6ryr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative p-6 w-5/6 m-8 rounded overflow-hidden shadow-lg hover:bg-black text-white  ">
            <img class="w-full" src={cb4} alt="HipHop Artist" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 mt-[-80px] md:mt-[-100px]">
              <FaChevronRight className="text-paperwhite border-paperwhite border-2 text-7xl md:text-5xl w-2/5" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Closet Bars Episode 4
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Videos_tab;
