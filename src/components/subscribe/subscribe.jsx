import React, { useState, useContext } from "react";
import { MyContext } from "../../Mycontext";
import Footer from "../footer";

const Subscribe = () => {
  const { future } = useContext(MyContext);
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${firstName}, Lastname: ${lastname} Email: ${email}`);
    setSubmitted(true);
  };

  return (
    <div className="p-4  mx-auto">
      <h2 className="text-3xl text-center bg-black text-white rounded-lg p-2">
        JayQ St. Patrick's Mailing List
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <div className="pb-2">
            <label>Firstname:</label>
          </div>
          <input
            type="text"
            className="w-full bg-grey p-3 rounded-lg"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="p-2">
          <div className="pb-2">
            <label>Lastname:</label>
          </div>
          <input
            type="text"
            className="w-full bg-grey p-3 rounded-lg"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div className="p-2">
          <div className="pb-2">
            <label>Email:</label>
          </div>
          <input
            type="email"
            className="w-full bg-grey p-3 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="text-center pt-4">
          <button className="p-3 rounded-lg bg-skyblue w-1/2" type="submit">
            Subscribe
          </button>
        </div>
      </form>
      {submitted && (
        <p className="text-2xl text-army-green text-center bg-hoverblue mt-4 rounded-lg">
          Thank you for subscribing!
        </p>
      )}
    </div>
  );
};

export default Subscribe;
