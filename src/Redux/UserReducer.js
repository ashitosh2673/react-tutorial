import React from "react";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./UsersTypes";
const initailState = {
  loading: false,
  users: [],
  error: null,
};

export const UserReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
