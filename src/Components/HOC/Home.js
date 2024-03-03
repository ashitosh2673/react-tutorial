import React from "react";
import WithLikesCycle from "./WithLikesCycleHOC";
import TempHooks from "./../Hooks/HookDemo1";
import HookDemo2 from "../Hooks/HookDemo2";
import HookDemo3 from "../Hooks/HookDemo3";
import HookDemo4 from "../Hooks/HookDemo4";
import HookDemo5 from "../Hooks/HookDemo5";

const Home = (props) => {
  return (
    <div>
      <h1>This is Home Component</h1>
      <h1>Likes : {props.likes} </h1>
      <button onClick={() => props.addLikes()}>Likes</button>
      <button onClick={() => props.addDislikes()}>Dislikes</button>
      {/* <TempHooks name={"It Shaala"} /> */}
      {/* {props.likes < 10 && (
        <HookDemo2 name={props.likes !== 10 ? "It Shaala" : "Test IT SHaala"} />
      )}
      <HookDemo3 /> */}
      <HookDemo4 />
      <HookDemo5 />
    </div>
  );
};

export default WithLikesCycle(Home);
