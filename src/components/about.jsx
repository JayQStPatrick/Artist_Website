import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import ChrisBrown from "../media/ChrisBrown.png";
import Pac from "../media/Pac.png";
import SantanDave from "../media/SantanDave.png";
import SnoopDogg from "../media/SnoopDogg.png";
import Finished from "../media/finished_two.jpg";
// import Footer from "../components/footer";
const About = () => {
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
          <div className="w-1/2 mx-auto p-4">
            <h1 class="text-4xl text-center">
              Welcome to JayQ St. Patrick Music
            </h1>
            <p class="text-2xl text-center mt-8">
              JayQ St. Patrick is an electrifying new force in hip hop, hailing
              from Kaduna, Nigeria. His lyrical precision and storytelling
              prowess set him apart, drawing inspiration from idols like J.
              Cole, Meek Mill, and MI Abaga. JayQ's attention to detail shines
              through in every verse, weaving intricate narratives with a
              compelling rhythm. His music captures the essence of his Nigerian
              roots while resonating globally, offering a fresh, authentic
              perspective in the rap scene. As he rises through the ranks, JayQ
              St. Patrick is poised to make a profound impact with his unique
              voice and masterful lyricism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
