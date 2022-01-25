import React from "react";
import SpendingForm from "./SpendingForm";
import "./NewSpending.css";

const NewSpending = () => {


  return (
    <div className="new-spending">
     <SpendingForm onSaveSpendingData/>
    </div>
  );
};
export default NewSpending;
