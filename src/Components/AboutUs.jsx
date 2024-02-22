import React from "react";

const AboutUs = (props) => {
  const callCallBack = () => {
    props.sendValues("This is from About Us");
  };
  return (
    <div>
      <h1>About Us</h1>
      <div>
        <span> This is about us page</span>
        <button onClick={() => callCallBack()}>
          Send Values to Parent Component
        </button>
      </div>
    </div>
  );
};
export default React.memo(AboutUs);
