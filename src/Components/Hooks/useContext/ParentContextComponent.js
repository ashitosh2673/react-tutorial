// App.js
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ChildComponent from "./ChildComponent";

const Parent = () => {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
};

export default Parent;
