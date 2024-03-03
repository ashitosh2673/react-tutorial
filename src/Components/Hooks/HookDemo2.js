import React, { useEffect } from "react";

// useEffect is used to perform side effects in functional components
const HookDemo2 = (props) => {
  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDislikes] = React.useState(0);

  //   const callbackFunc = () => {
  //     console.log("Likes useEffect Called with values : ", likes);
  //   };

  //  ComponentDidMount - [] - empty array - useEffect will be called only once after the initial render
  //   useEffect(callbackFunc, []);

  //  ComponentDidUpdate - [likes] - useEffect will be called whenever likes value changes
  //   useEffect(() => {
  //     console.log("Likes useEffect Called with values : ", likes, dislikes);
  //   }, [likes, dislikes]);

  //   useEffect(() => {
  //     console.log("Dislikes useEffect Called with values : ", likes, dislikes);
  //   });

  useEffect(() => {
    if (props.name === "It Shaala") {
      setLikes(10);
      setDislikes(0);
    }
  }, [props.name]);

  //   componentWillUnmount
  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  return (
    <div>
      <h1>HookDemo2 : {props.name} </h1>
      <h1>Likes : {likes} </h1>
      <button onClick={() => setLikes(likes + 1)}>Likes</button>
      <h1>Dislikes : {dislikes} </h1>
      <button onClick={() => setDislikes(dislikes + 1)}>Dislikes</button>
    </div>
  );
};

export default HookDemo2;
