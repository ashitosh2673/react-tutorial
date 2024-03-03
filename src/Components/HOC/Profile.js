import React from "react";
import WithLikesCycle from "./WithLikesCycleHOC";

const Profile = (props) => {
  return (
    <div>
      <h1>This is Profile Component</h1>
      <h1>Likes : {props.likes} </h1>
      <button onClick={() => props.addLikes()}>Likes</button>
      <button onClick={() => props.addDislikes()}>Dislikes</button>
    </div>
  );
};

export default WithLikesCycle(Profile);
