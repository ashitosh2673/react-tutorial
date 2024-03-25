import { createStore, applyMiddleware, combineReducers } from "redux";
import MedicineReducer from "./MedicineReducer";
import { thunk } from "redux-thunk";
import UserReducer from "./UserReducer";
import counterReducer from "./counterSlice";

const store = createStore(
  combineReducers({
    user: UserReducer,
    medicine: MedicineReducer,
    counter: counterReducer,
  }),
  // UserReducer,
  applyMiddleware(thunk)
);

export default store;
