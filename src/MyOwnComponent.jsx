import React from "react";
import moment from "moment";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Counter from "./Components/Counter";
import "./CSS/home.css";

// class MyOwnFunctionalComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Hello, World!",
//     };
//   }

//   render() {
//     const { message } = this.state;
//     return <h1>{message}</h1>;
//   }
// }

// export default MyOwnFunctionalComponent;
// function MyOwnFunctionalComponent() {
//   return <h1>Hello, World! This is ITShaala Website in progress</h1>;
// }

export default function MyOwnFunctionalComponent(props) {
  // const arrFruits = ["apple", "banana", "mango", "orange"];
  // const arrStudents = [
  //   { name: "John", age: 25 },
  //   { name: "Jane", age: 24 },
  // ];
  return (
    <h1>
      Hello, {props.name}! This is ITShaala Website in progress :{" "}
      {moment().format("YYYY-MM-DD")}
      {/* <Home
        {...props}
        thisIsMyTestComponent="yes it new component"
        fruits={arrFruits}
      />
      <Home {...props} fruits={arrFruits} students={arrStudents} />
      <AboutUs /> */}
      <Counter />
    </h1>
  );
}

// export default MyOwnFunctionalComponent;

// Rules of JSX:
// 1. Always use camelCase for HTML attribute names.
// 2. Always close tags.
// 3. Always include a root tag.
// 4. Always include parentheses when returning multiple lines.
// 5. Must have a single return root element

//  Props are arguments passed into React components. Props are passed to components via HTML attributes. A component can also maintain its own state, which is different from the props. State is managed within the component and is mutable. Props are immutable.
