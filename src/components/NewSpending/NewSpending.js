import React from "react";
import SpendingForm from "./SpendingForm";
import "./NewSpending.css";
import SpendingDate from "../Spending/SpendingDate";

const NewSpending = (props) => {
  const saveSpendingDataHandler = (enteredSpendingData) => {
    const spendingData ={
      ...enteredSpendingData,
      id: Math.random().toString()
    };
    console.log(spendingData);
    props.onAddSpending(SpendingDate);
  };

  return (
    <div className="new-spending">
      <SpendingForm onSaveSpendingData={saveSpendingDataHandler} />
    </div>
  );
};
export default NewSpending;
