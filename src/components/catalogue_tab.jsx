import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import ChrisBrown from "../media/ChrisBrown.png";
import Pac from "../media/Pac.png";
import SantanDave from "../media/SantanDave.png";
import SnoopDogg from "../media/SnoopDogg.png";
import Finished from "../media/finished_two.jpg";
// import Footer from "../components/footer";
const Catalogue_tab = () => {
  const [hasBackground, setHasBackground] = useState(false);

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
    <div className="flex flex-col min-h-screen">
      <Navbar hasBackground={hasBackground} />
      <div className="flex-grow">
        <img
          src={Finished}
          alt="landing"
          className="bg-cover bg-center bg-repeat-x w-full"
        />
        <div className="p-6">
          {/* Catalogue first row */}
          <div className="lg:flex flex-row ">
            <div className="lg:p-5 ">
              <div className="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left clear-both display-table lg:w-full">
                <div className="md:w-1/2 md:p-3">
                  <img className="w-full" src={Pac} alt="HipHop Artist" />
                </div>
                <div className="md:w-3/4 md:p-3">
                  <div className="font-bold text-xl p-4 text-center">
                    The Coldest Sunset
                  </div>
                  <p className="text-base text-center p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center py-2">
                    <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-5 ">
              <div className="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left clear-both display-table lg:w-full">
                <div className="md:w-1/2 md:p-3">
                  <img className="w-full" src={Pac} alt="HipHop Artist" />
                </div>
                <div className="md:w-3/4 md:p-3">
                  <div className="font-bold text-xl p-4 text-center">
                    The Coldest Sunset
                  </div>
                  <p className="text-base text-center p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center py-2">
                    <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Catalogue second row */}
          <div className="lg:flex flex-row ">
            <div className="lg:p-5 ">
              <div className="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left clear-both display-table lg:w-full">
                <div className="md:w-1/2 md:p-3">
                  <img className="w-full" src={Pac} alt="HipHop Artist" />
                </div>
                <div className="md:w-3/4 md:p-3">
                  <div className="font-bold text-xl p-4 text-center">
                    The Coldest Sunset
                  </div>
                  <p className="text-base text-center p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center py-2">
                    <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-5 ">
              <div className="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left clear-both display-table lg:w-full">
                <div className="md:w-1/2 md:p-3">
                  <img className="w-full" src={Pac} alt="HipHop Artist" />
                </div>
                <div className="md:w-3/4 md:p-3">
                  <div className="font-bold text-xl p-4 text-center">
                    The Coldest Sunset
                  </div>
                  <p className="text-base text-center p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center py-2">
                    <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Catalogue third row */}
          <div className="lg:flex flex-row ">
            <div className="lg:p-5 ">
              <div className="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left clear-both display-table lg:w-full">
                <div className="md:w-1/2 md:p-3">
                  <img className="w-full" src={Pac} alt="HipHop Artist" />
                </div>
                <div className="md:w-3/4 md:p-3">
                  <div className="font-bold text-xl p-4 text-center">
                    The Coldest Sunset
                  </div>
                  <p className="text-base text-center p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center py-2">
                    <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-5 ">
              <div className="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left clear-both display-table lg:w-full">
                <div className="md:w-1/2 md:p-3">
                  <img className="w-full" src={Pac} alt="HipHop Artist" />
                </div>
                <div className="md:w-3/4 md:p-3">
                  <div className="font-bold text-xl p-4 text-center">
                    The Coldest Sunset
                  </div>
                  <p className="text-base text-center p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center py-2">
                    <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Catalogue fourth row */}
          <div className="lg:flex flex-row ">
            <div className="lg:p-5 ">
              <div className="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left clear-both display-table lg:w-full">
                <div className="md:w-1/2 md:p-3">
                  <img className="w-full" src={Pac} alt="HipHop Artist" />
                </div>
                <div className="md:w-3/4 md:p-3">
                  <div className="font-bold text-xl p-4 text-center">
                    The Coldest Sunset
                  </div>
                  <p className="text-base text-center p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center py-2">
                    <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-5 ">
              <div className="flex flex-col w-3/4 mx-auto md:min-w-2/6 md:flex-row lg:float-left clear-both display-table lg:w-full">
                <div className="md:w-1/2 md:p-3">
                  <img className="w-full" src={Pac} alt="HipHop Artist" />
                </div>
                <div className="md:w-3/4 md:p-3">
                  <div className="font-bold text-xl p-4 text-center">
                    The Coldest Sunset
                  </div>
                  <p className="text-base text-center p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center py-2">
                    <button className="bg-navyblue text-white text-lg w-1/3 rounded-2xl ">
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue_tab;
