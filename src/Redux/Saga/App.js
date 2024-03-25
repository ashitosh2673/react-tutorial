import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector((state) => state);
  const state = useSelector((state) => state);

  console.log("state", state);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  //   console.log("state", state);
  return (
    <div>
      <h1>App</h1>

      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
};

export default App;
