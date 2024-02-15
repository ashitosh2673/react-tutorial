import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyOwnFunctionalComponent from "./MyOwnComponent";

//  ReactDOm.createRoot() method is used to create a root for a react tree. It is used to render a react tree into a container that may have had other content rendered into it outside of the control of React.
//  render() method is used to render a react element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

// JSX (JavaScript XML) is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.1

const root = ReactDOM.createRoot(document.getElementById("root1234"));
root.render(<MyOwnFunctionalComponent name="IT Shaala" />);
