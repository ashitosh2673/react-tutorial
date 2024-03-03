import React from "react";

const ReactMemoComponent = (props) => {
  console.log("ReactMemoComponent ===> render 111");
  return (
    <div>
      <h1>This is ReactMemoComponent</h1>
      <h1>Current Counter (ReactMemoComponent) is : {props.count} </h1>
    </div>
  );
};

export default React.memo(ReactMemoComponent);
// React memo is HOC (Higher Order component) which will checke whehther there is any change in the prop then only re-render the component
