import React, { useState } from "react";
import "./SpendingForm.css";

const SpendingForm = () => {
    const [newTitle, setTitle] = useState("");
    const [newAmount, setAmount] = useState("");
    const [newDate, setDate] = useState("");

//   const [userInput, setUserInput] = 
//     useState({
//       newTitle: "",
//       newAmount: "",
//       newDate: "",
//     });


  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   newTitle: event.target.value,
    // });
    // setUserInput((prevState)=>{
    //     return {...prevState, newTitle: event.target.value};
    // });
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) =>{
      event.preventDefault();
      const spendingData = {
          title: newTitle,
          amount: newAmount,
          date: new Date(newDate)
      };
      console.log(spendingData);
      setTitle('');
      setAmount('');
      setDate('');

  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-spending__controls">
        <div className="new-spending__control">
          <label>title</label>
          <input type="text" 
          value={newTitle}
          onChange={changeTitleHandler} />
        </div>
        <div className="new-spending__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.001"
            value={newAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-spending__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={newDate}
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
