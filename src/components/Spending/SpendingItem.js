import React, {useState} from "react";
import SpendingDate from "./SpendingDate";
import SpendingForm from "../NewSpending/SpendingForm";
import Card from "../UI/Card";
import "./SpendingItem.css";

const SpendingItem = (props) => {
  const [title, setTitle]=useState(props.title);

  const changeTitleHandler = () => {
  
    setTitle('updated');
    console.log({title});
    return(
      <div>
  
      </div>
    );
  
  };

  return (
    <Card className="spending-item">
      <SpendingDate date={props.date}></SpendingDate>

      <div className="spending-item__description">
        <h2>{title}</h2>
        <div className="spending-item__price">Rp {props.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>change title</button>
    </Card>
  );
};

export default SpendingItem;
