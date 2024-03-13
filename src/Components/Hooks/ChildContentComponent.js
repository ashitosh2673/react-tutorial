import React, { useContext } from "react";
import { MyContext } from "./Context";

const ChildContentComponent = (props) => {
  const { Increment, Decrement } = useContext(MyContext);
  return (
    <div>
      <h1>ChildContentComponent</h1>
      <button onClick={() => Increment()}>Increment</button>
      <button onClick={() => Decrement()}>Decrement</button>
    </div>
  );
};

export default ChildContentComponent;
