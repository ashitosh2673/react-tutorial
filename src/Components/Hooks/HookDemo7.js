// useCallBack Hook : It is used to memoize the function so that it does not get re-rendered on every render. It is used to optimize the performance of the application.

import React, { useState, useCallback } from "react";

const HookDemo7 = (props) => {
  const [count, setCount] = useState(0);

  const Increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>HookDemo 7 : {count}</h1>
      <button onClick={Increment}>Click me</button>
    </div>
  );
};

export default HookDemo7;
