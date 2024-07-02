import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar";
import News from "./components/news_tab";
import Catalogue from "./components/catalogue_tab";
import Events from "./components/events_tab";
import Merch from "./components/merch_tab";
import Videos from "./components/videos_tab";
import Footer from "./components/footer";
import Subscribe from "./components/subscribe/subscribe";
import About from "./components/about";
import { MyProvider } from "./Mycontext";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Router className="w-1/4">
        <MyProvider>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/catalogue_tab" element={<Catalogue />} />
            <Route path="/videos_tab" element={<Videos />} />
            <Route path="/events_tab" element={<Events />} />
            <Route path="/merch_tab" element={<Merch />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </MyProvider>
      </Router>
    </>
  );
}

export default App;
