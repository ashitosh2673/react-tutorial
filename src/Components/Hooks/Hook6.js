// useMemo : It is used to optimize the performance of the application. It is used to avoid the re-rendering of the component when the state is not changed. It is used to avoid the re-calculation of the value when the state is not changed.

import React, { useMemo } from "react";

const HookDemo5 = (props) => {
  const [count, setCount] = React.useState(0);

  const updatedValue = useMemo(() => {
    return count + 2;
  }, [count]);

  return (
    <div>
      <h1>
        HookDemo 6 : {updatedValue} : {count}{" "}
      </h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default HookDemo5;
