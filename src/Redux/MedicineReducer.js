import { BUY_MEDICINE, RETURN_MEDICINE } from "./MedicineTypes";

const initailState = {
  medicineCount: 10,
};

const MedicineReducer = (state = initailState, action) => {
  switch (action.type) {
    case BUY_MEDICINE:
      return { ...state, medicineCount: state.medicineCount - 1 };
    case RETURN_MEDICINE:
      return { ...state, medicineCount: state.medicineCount + 1 };
    default:
      return state;
  }
};

export default MedicineReducer;
