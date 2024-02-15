import React, { Fragment, useState } from "react";

const Home = ({
  name,
  thisIsMyTestComponent = "Home Page",
  fruits,
  students,
}) => {
  const [inputValue, setInputValue] = useState("");
  const onClickEventCatch = (e) => {
    console.log(e.target.innerText);
  };

  const onChageInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const studentList =
    thisIsMyTestComponent === "Home Page" &&
    students?.map((student, index) =>
      student.age > 24 ? (
        <li key={index} onClick={onClickEventCatch}>
          {" "}
          {student.name}'s age is {student.age}{" "}
        </li>
      ) : null
    );

  return thisIsMyTestComponent !== "Home Page" ? (
    <>This not a home page</>
  ) : (
    <>
      <h1>{name}</h1>
      <>
        <h1>{thisIsMyTestComponent}</h1>
        <input type="text" onChange={onChageInput} />

        <label>{inputValue}</label>
        <ul>{studentList}</ul>
      </>
    </>
  );
};
export default Home;

// fragment is used to return multiple elements from a component
