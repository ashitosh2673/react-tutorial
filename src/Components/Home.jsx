import React, { Fragment, useState } from "react";
import "./../CSS/home.css";
import ModuleTest from "./ModuleTest";
import Styles from "./../CSS/home.module.css";

const Home = ({
  name,
  thisIsMyTestComponent = "Home Page",
  fruits,
  students,
  tempValue,
}) => {
  const [inputValue, setInputValue] = useState("");

  // const [studentsList, setStudentsList] = useState({
  //   students: [],
  //   inputValue: "",
  //   isComponetUpdate: false,
  // });
  // const [isComponetUpdate, setIsComponetUpdate] = useState(false);
  const onClickEventCatch = (e) => {
    console.log(e.target.innerText);
  };

  const onChageInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  //
  //  1           - 4
  // 2            - 1
  // 3            - 2
  //              - 3
  const studentList =
    thisIsMyTestComponent === "Home Page" &&
    students?.map(
      (student, index) => (
        // student.age > 24 ? (
        <li key={index} onClick={onClickEventCatch}>
          {" "}
          {student.name}'s age is {student.age}{" "}
        </li>
      )
      // ) : null
    );

  const ComponentStyle = {
    color: "red",
    backgroundColor: "yellow",
    fontSize: "50px",
  };

  return thisIsMyTestComponent !== "Home Page" ? (
    <>This not a home page</>
  ) : (
    <>
      <h1
        className={`${Styles.homebackground} home-background`}
        style={{
          color: "red",
          backgroundColor: "yellow",
          fontSize: "50px",
        }}
      >
        {name + "test"}
      </h1>
      <>
        <h1>{thisIsMyTestComponent}</h1>
        <input type="text" onChange={onChageInput} />

        <label>{inputValue}</label>

        <ul>
          {thisIsMyTestComponent === "Home Page" &&
            students?.map((student, index) =>
              student.age > 24 ? (
                <li key={student.id} onClick={onClickEventCatch}>
                  {" "}
                  {student.name}'s age is {student.age}{" "}
                </li>
              ) : null
            )}
        </ul>

        <ModuleTest />
      </>
    </>
  );
};
export default Home;

// fragment is used to return multiple elements from a component
