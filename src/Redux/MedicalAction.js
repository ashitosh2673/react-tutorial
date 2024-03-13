import { BUY_MEDICINE, RETURN_MEDICINE } from "./MedicineTypes";
export const BuyMedicine = () => {
  return {
    type: BUY_MEDICINE,
  };
};

export const ReturnMedicine = () => {
  return {
    type: RETURN_MEDICINE,
  };
};
