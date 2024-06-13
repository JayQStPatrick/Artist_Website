// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import { MyProvider } from "./MyContext";

const Home = () => <div>Home Page</div>; // Example placeholder for Home
const Contact = () => <div>Contact Page</div>; // Example placeholder for Contact

const App = () => {
  return (
    <Router>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </MyProvider>
    </Router>
  );
};

export default App;
