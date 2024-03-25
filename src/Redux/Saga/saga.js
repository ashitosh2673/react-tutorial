import { takeEvery, put, call } from "redux-saga/effects";
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./actions";

function* fetchPosts() {
  try {
    const posts = yield call(() => {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .catch((error) => {
          console.log("error", error);
        });
    });

    console.log("posts", posts);
    yield put({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    console.log("error", error);
    yield put({
      type: FETCH_POSTS_FAILURE,
      payload: error.message ?? "Something went wrong!",
    });
  }
}

function* deletePost() {
  try {
    const posts = yield call(() => {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .catch((error) => {
          console.log("error", error);
        });
    });

    console.log("posts", posts);
    yield put({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    console.log("error", error);
    yield put({
      type: FETCH_POSTS_FAILURE,
      payload: error.message ?? "Something went wrong!",
    });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
  yield takeEvery(FETCH_POSTS, deletePost);
}
