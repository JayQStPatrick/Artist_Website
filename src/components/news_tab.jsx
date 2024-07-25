import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../navbar.css";
import Navbar from "./navbar";
import Meek from "../media/meek.png";
import TBFKD from "../media/TBFKDcover.jpg";
import corporate from "../media/CorporateCover.jpeg";
import ontop from "../media/OntopCover.png";
import jara from "../media/JaraCover.png";
import myshoulder from "../media/MyshoulderCover.png";
import lemonpepper from "../media/LemonPepperCover.png";
import { NextArrow, PrevArrow } from "./customarrows";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleDownload = () => {
    window.location.href = "http://localhost:5000/download";
  };

  return (
    <div className="">
      <Navbar hasBackground={hasBackground} />
      <div className="">
        <Slider {...settings}>
          <div>
            <video
              src="/Videos/Clip1.mp4"
              type="mp4"
              autoPlay
              loop
              muted
              className="video-background"
            />
          </div>
          <div>
            <video
              src="/Videos/Clip2.mp4"
              type="mp4"
              autoPlay
              loop
              muted
              className="video-background"
            />
          </div>
          <div>
            <video
              src="/Videos/Clip3.mp4"
              type="mp4"
              autoPlay
              loop
              muted
              className="video-background"
            />
          </div>
        </Slider>
      </div>
      {/* News first row */}
      <div className="flex flex-col md:flex-row md:p-6 md:grid-cols-3 md:gap-4">
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={TBFKD} alt="HipHop Artist" />
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center font-serif">
              The Boy From KD
            </div>
            <p class="text-lg text-center">
              A nostalgic mixtape blending HipHop rhythms and soulful melodies,
              capturing the essence of a boy from Kaduna.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
            <button
              onClick={handleDownload}
              className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl"
            >
              Download
            </button>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={corporate} alt="HipHop Artist" />
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
            <a
              href="https://audiomack.com/jayq_sounds/song/corporate"
              target="_blank"
              className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl"
            >
              PLAY
            </a>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={ontop} alt="HipHop Artist" />
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
            <a
              href="https://audiomack.com/jayq_sounds/song/ontop"
              target="_blank"
              className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl"
            >
              PLAY
            </a>
          </div>
        </div>
      </div>
      {/* News second row */}
      <div className="flex flex-col md:flex-row md:p-6 md:grid-cols-3 md:gap-4">
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={jara} alt="HipHop Artist" />
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
            <a
              href="https://audiomack.com/jayq_sounds/song/jara"
              target="_blank"
              className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl"
            >
              PLAY
            </a>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={myshoulder} alt="HipHop Artist" />
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
            <a
              href="https://audiomack.com/jayq_sounds/song/yeb-my-shoulder"
              target="_blank"
              className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl"
            >
              PLAY
            </a>
          </div>
        </div>
        <div class="mx-auto w-1/2 md:w-1/4 lg:w-1/3 mt-8 p-4 rounded overflow-hidden shadow-lg hover:bg-hoverblue">
          <img class="w-full" src={lemonpepper} alt="HipHop Artist" />
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
            <a
              href="https://audiomack.com/jayq_sounds/song/lemon-pepper-freestyle"
              target="_blank"
              className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl"
            >
              PLAY
            </a>
          </div>
        </div>
      </div>

      {/* <Subscribe /> */}
    </div>
  );
};

export default News_tab;
