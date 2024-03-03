import React, { useEffect } from "react";

//
const useCustomHook = (initialState) => {
  const [state, setState] = React.useState(initialState);
  const [data, setData] = React.useState([{}]);

  const incrementCount = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [state]);

  const decrementCount = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  return [state, incrementCount, decrementCount, data];
};

export default useCustomHook;
