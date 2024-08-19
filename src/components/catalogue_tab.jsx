import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import JayQ1 from "../media/JayQ1.jpg";
import TBFKD from "../media/TBFKDcover.jpg";
import corporate from "../media/CorporateCover.jpeg";
import ontop from "../media/OntopCover.png";
import jara from "../media/JaraCover.png";
import myshoulder from "../media/MyshoulderCover.png";
import lemonpepper from "../media/LemonPepperCover.png";
import crownofclay from "../media/CrownofclayCover.png";
import feelings from "../media/FeelingsCover.png";

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
    <div className="flex flex-col min-h-screen bg-thickred">
      <Navbar hasBackground={hasBackground} />
      <div className="flex-grow">
        <img
          src={JayQ1}
          alt="landing"
          className="bg-cover bg-center bg-repeat-x w-full"
        />
        <div className="">
          {/* Catalogue first row */}
          <div className="xl:flex w-full mx-auto flex-row">
            <div className="flex flex-col lg:w-1/2 p-5">
              <div className="flex flex-col w-full border-2 p-6 border-black hover:bg-black md:flex-row lg:h-full">
                <div className="md:w-1/2 ">
                  <img
                    className="w-full h-full object-cover"
                    src={TBFKD}
                    alt="HipHop Artist"
                  />
                </div>
                <div className="md:w-3/4 p-4">
                  <div className="font-bold text-xl text-white text-center">
                    The Boy From KD
                  </div>
                  <p className="text-base text-white text-center py-4">
                    A nostalgic mixtape blending HipHop rhythms and soulful
                    melodies, capturing the essence of a boy from Kaduna.
                  </p>
                  <div className="text-center py-6">
                    <button className="bg-mainblue hover:bg-solidblack p-3 text-white text-lg lg:w-3/4 md:w-full rounded-2xl">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 p-5">
              <div className="flex flex-col w-full border-2 p-6 border-black hover:bg-black md:flex-row lg:h-full">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={ontop}
                    alt="HipHop Artist"
                  />
                </div>
                <div className="md:w-3/4 p-4">
                  <div className="font-bold text-xl text-white text-center">
                    Ontop
                  </div>
                  <p className="text-base text-white text-center py-4">
                    JayQ St. Patrick's 'Ontop' is a soulful love track,
                    celebrating passion and connection with mesmerizing melodies
                  </p>
                  <div className="text-center py-6">
                    <a
                      href="https://audiomack.com/jayq_sounds/song/ontop"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-mainblue hover:bg-solidblack p-3 text-white text-lg lg:w-3/4 md:w-full rounded-2xl"
                    >
                      PLAY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Catalogue second row */}
          <div className="xl:flex w-full mx-auto flex-row">
            <div className="flex flex-col lg:w-1/2 p-5">
              <div className="flex flex-col w-full border-2 p-6 border-black hover:bg-black md:flex-row lg:h-full">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={corporate}
                    alt="HipHop Artist"
                  />
                </div>
                <div className="md:w-3/4 p-4">
                  <div className="font-bold text-xl text-white text-center">
                    Corporate
                  </div>
                  <p className="text-base text-white text-center py-4">
                    Corporate by JayQ St. Patrick delivers a hard-hitting,
                    energetic anthem exploring the dynamics of ambition and
                    power in business.
                  </p>
                  <div className="text-center py-6">
                    <a
                      href="https://audiomack.com/jayq_sounds/song/corporate"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-mainblue hover:bg-solidblack p-3 text-white text-lg lg:w-3/4 md:w-full rounded-2xl"
                    >
                      PLAY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 p-5">
              <div className="flex flex-col w-full border-2 p-6 border-black hover:bg-black md:flex-row lg:h-full">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={jara}
                    alt="HipHop Artist"
                  />
                </div>
                <div className="md:w-3/4 p-4">
                  <div className="font-bold text-xl text-white text-center">
                    Jara
                  </div>
                  <p className="text-base text-white text-center py-4">
                    "Jara" by JayQ St. Patrick featuring Trimz is an uplifting
                    anthem of resilience, joy, and unity, inspiring hearts
                    worldwide.
                  </p>
                  <div className="text-center py-6">
                    <a
                      href="https://audiomack.com/jayq_sounds/song/jara"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-mainblue hover:bg-solidblack p-3 text-white text-lg lg:w-3/4 md:w-full rounded-2xl"
                    >
                      PLAY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Catalogue third row */}
          <div className="xl:flex w-full mx-auto flex-row">
            <div className="flex flex-col lg:w-1/2 p-5">
              <div className="flex flex-col w-full border-2 p-6 border-black hover:bg-black md:flex-row lg:h-full">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={myshoulder}
                    alt="HipHop Artist"
                  />
                </div>
                <div className="md:w-3/4 p-4">
                  <div className="font-bold text-xl text-white text-center">
                    My Shoulder
                  </div>
                  <p className="text-base text-white text-center p-4">
                    "My Shoulder" by JayQ St. Patrick featuring Geekay and ESK
                    is a powerful hip hop track celebrating brotherhood,
                    loyalty, and unwavering support through life's challenges.
                  </p>
                  <div className="text-center py-6">
                    <a
                      href="https://audiomack.com/jayq_sounds/song/yeb-my-shoulder"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-mainblue hover:bg-solidblack p-3 text-white text-lg lg:w-3/4 md:w-full rounded-2xl"
                    >
                      PLAY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 p-5">
              <div className="flex flex-col w-full border-2 p-6 border-black hover:bg-black md:flex-row lg:h-full">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={lemonpepper}
                    alt="HipHop Artist"
                  />
                </div>
                <div className="md:w-3/4 p-4">
                  <div className="font-bold text-xl text-white text-center">
                    Lemon Pepper Freestyle
                  </div>
                  <p className="text-base text-white text-center p-4">
                    "Lemon Pepper" by JayQ St. Patrick: A raw, emotional
                    freestyle exploring life's hardships, resilience, and
                    triumph through powerful, heartfelt lyrics.
                  </p>
                  <div className="text-center py-6">
                    <a
                      href="https://audiomack.com/jayq_sounds/song/lemon-pepper-freestyle"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-mainblue hover:bg-solidblack p-3 text-white text-lg lg:w-3/4 md:w-full rounded-2xl"
                    >
                      PLAY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Catalogue fourth row */}
          <div className="xl:flex w-full mx-auto flex-row">
            <div className="flex flex-col lg:w-1/2 p-5">
              <div className="flex flex-col w-full border-2 p-6 border-black hover:bg-black md:flex-row lg:h-full">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={crownofclay}
                    alt="HipHop Artist"
                  />
                </div>
                <div className="md:w-3/4 p-4">
                  <div className="font-bold text-xl text-white text-center">
                    Crown of Clay Freestyle
                  </div>
                  <p className="text-base text-white text-center p-4">
                    JayQ St. Patrick's 'Crown of Clay' delivers raw, poetic bars
                    exploring heritage, resilience, and identity in powerful
                    freestyle.
                  </p>
                  <div className="text-center py-6">
                    <a
                      href="https://audiomack.com/jayq_sounds/song/crownofclaycover"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-mainblue hover:bg-solidblack p-3 text-white text-lg lg:w-3/4 md:w-full rounded-2xl"
                    >
                      PLAY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 p-5">
              <div className="flex flex-col w-full border-2 p-6 border-black hover:bg-black md:flex-row lg:h-full">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={feelings}
                    alt="HipHop Artist"
                  />
                </div>
                <div className="md:w-3/4 p-4">
                  <div className="font-bold text-xl text-white text-center">
                    Feelings Cover
                  </div>
                  <p className="text-base text-white text-center p-4">
                    JayQ St. Patrick's 'Feelings' delivers raw emotions through
                    captivating lyrics, showcasing heartfelt storytelling in an
                    electrifying hip hop freestyle.
                  </p>
                  <div className="text-center py-6">
                    <a
                      href="https://audiomack.com/jayq_sounds/song/lemme-know-cover"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-mainblue hover:bg-solidblack p-3 text-white text-lg lg:w-3/4 md:w-full rounded-2xl"
                    >
                      PLAY
                    </a>
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
