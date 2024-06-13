import React, { createContext, useState } from "react";

const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [future, setFuture] = useState("some value");
  const contextValue = { future, setFuture };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
