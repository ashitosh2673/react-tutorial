import React, { useRef } from "react";

const HookDemo5 = (props) => {
  //  useRef is used to access the DOM elements directly
  //  useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  //  The returned object will persist for the full lifetime of the component.

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const updateInput = () => {
    inputRef.current.value = "It Shaala";
    inputRef2.current.value = "Finance Shaala";
  };

  const clearInput = () => {
    inputRef.current.value = "";
    inputRef2.current.value = "";
  };

  return (
    <div>
      <h1>HookDemo5 : {props.name} </h1>
      <input ref={inputRef} type="text" />
      <input ref={inputRef2} type="text" />

      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={updateInput}>Update Input</button>
      <button onClick={clearInput}>Clear Input</button>
    </div>
  );
};

export default HookDemo5;
