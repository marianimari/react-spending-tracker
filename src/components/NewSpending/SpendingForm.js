import React, { useState } from "react";
import "./SpendingForm.css";

const SpendingForm = () => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [userInput, setUserInput] = 
    useState({
      newTitle: "",
      newAmount: "",
      newDate: "",
    });


  const changeTitleHandler = (event) => {
    // setTitle(event.target.value);
    setUserInput({
      ...userInput,
      newTitle: event.target.value,
    });
  };
  const changeAmountHandler = (event) => {
    setUserInput({
      ...userInput,
      newAmount: event.target.value,
    });
  };
  const changeDateHandler = (event) => {
    setUserInput({
      ...userInput,
      newDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-spending__controls">
        <div className="new-spending__control">
          <label>title</label>
          <input type="text" onChange={changeTitleHandler} />
        </div>
        <div className="new-spending__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.001"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-spending__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            onChange={changeDateHandler}
          />
        </div>
        <div className="new-spending__actions">
          <button type="submit">Add Spending</button>
        </div>
      </div>
    </form>
  );
};

export default SpendingForm;
