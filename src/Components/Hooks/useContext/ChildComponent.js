// App.js
import React from "react";
import { useTheme } from "./ThemeContext";

const ChildComponent = () => {
  return <MyGrandChildComponent />;
};

const MyGrandChildComponent = () => {
  const { theme, toggleTheme, testValue } = useTheme();

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>{testValue}</h1>
    </div>
  );
};

export default ChildComponent;
