// useLayoutEffect : It is used to perform the DOM manipulation after the render is completed. It is similar to useEffect but it runs after the render is completed. It is used to perform the DOM manipulation after the render is completed. It is similar to useEffect but it runs after the render is completed.

// Difference between useEffect and useLayoutEffect:
// useEffect : It is used to perform the side effects after the render is completed. It is used to perform the side effects after the render is completed.
// useLayoutEffect : It is used to perform the DOM manipulation after the render is completed. It is similar to useEffect but it runs after the render is completed. It is used to perform the DOM manipulation after the render is completed. It is similar to useEffect but it runs after the render is completed.

import React, { useEffect, useLayoutEffect, useState } from "react";

const HookDemo8 = (props) => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  //   useEffect(() => {
  //     function updateWidth() {
  //       setWidth(window.innerWidth);
  //     }

  //     window.addEventListener("resize", updateWidth);
  //     updateWidth();

  //     return () => window.removeEventListener("resize", updateWidth);
  //   }, []);

  return (
    <div>
      <h1>HookDemo8 : - windows Width : {width} </h1>
    </div>
  );
};

export default HookDemo8;
