import React, { useReducer } from "react";

// useReducer hooks
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const HookDemo3 = (props) => {
  //  useReducer - similar to useState but complex state logic
  //  We are using useReducer to manage state logic in a complex way and it accepts a reducer function and initial state as arguments andin return it returns the current state and dispatch method to dispatch actions to the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);
  const [likes, setLikes] = React.useState(0);

  return (
    <div>
      <h1>HookDemo3 : {props.name} </h1>
      <spna>This is my count value : {state.count}</spna>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default HookDemo3;
