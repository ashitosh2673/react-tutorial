import React, { useState, useContext } from "react";
import { MyContext } from "./Context";

// Create a provider
export const MyProvider = ({ Children }) => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, Increment, Decrement }}>
      {Children}
    </MyContext.Provider>
  );
};
