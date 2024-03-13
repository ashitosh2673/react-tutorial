import { createStore } from "redux";
import MedicineReducer from "./MedicineReducer";

const store = createStore(MedicineReducer);

export default store;
