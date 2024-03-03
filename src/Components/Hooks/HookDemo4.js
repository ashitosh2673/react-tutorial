import React from "react";
import useCustomHook from "./useCustomHook";

const HookDemo4 = (props) => {
  const [state, incrementCount, decrementCount, data] = useCustomHook({
    count: 0,
  });

  console.log("Data", data);

  return (
    <div>
      <h1>HookDemo4 : {props.name} </h1>
      <spna>This is my count value : {state.count}</spna>
      <button onClick={() => incrementCount()}>Increment</button>
      <button onClick={() => decrementCount()}>Decrement</button>
    </div>
  );
};

export default HookDemo4;
