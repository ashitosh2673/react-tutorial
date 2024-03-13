import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MyOwnFunctionalComponent from "./MyOwnComponent";
// import ComponentLifeCycle from "./Components/ComponentLifeCycle";
// import Parent from "./Components/ComponentLifeCycle/Parent";
// import ErrorHandling from "./Components/ErrorHandling/ErrorHandling";
// import PureComponent from "./Components/PureComponent/PureParentComponent";
//  ReactDOm.createRoot() method is used to create a root for a react tree. It is used to render a react tree into a container that may have had other content rendered into it outside of the control of React.
//  render() method is used to render a react element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

// JSX (JavaScript XML) is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.1

// import ParentContextComponent from "./Components/Hooks/useContext/ParentContextComponent";
import Main from "./Components/Router/Main";
import store from "./Redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root1234"));

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
