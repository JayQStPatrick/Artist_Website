import React, { useState, useContext } from "react";
import { MyContext } from "../../Mycontext";

const Subscribe = () => {
  const { future } = useContext(MyContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
    setSubmitted(true);
  };

  return (
    <>
      <h2>Subscribe to our Mailing List</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Subscribe</button>
      </form>
      {submitted && <p>Thank you for subscribing!</p>}
    </>
  );
};

export default Subscribe;
