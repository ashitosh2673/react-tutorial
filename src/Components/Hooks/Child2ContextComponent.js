import React, { useContext } from "react";
import { MyContext } from "./Context";

const Child2ContentComponent = (props) => {
  const { count } = useContext(MyContext);
  return (
    <div>
      <h1>ChildContentComponent 2 </h1>
      <spna>This is my count value : {count}</spna>
    </div>
  );
};

export default Child2ContentComponent;
