import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_MEDICINE, RETURN_MEDICINE } from "../../Redux/MedicineTypes";
import { BuyMedicine, ReturnMedicine } from "../../Redux/MedicalAction";

const Dashboard = () => {
  const medicineCount = useSelector((state) => state.medicineCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Dashboard </h1>
      <h2>Medicine Count : {medicineCount}</h2>
      <button onClick={() => dispatch(BuyMedicine())}>Buy Medicine</button>
      <button onClick={() => dispatch(ReturnMedicine())}>
        Return Medicine
      </button>
    </div>
  );
};

export default Dashboard;
