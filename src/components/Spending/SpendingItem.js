import SpendingDate from "./SpendingDate";
import Card from "../UI/Card";
import "./SpendingItem.css";


const SpendingItem = (props) => {
  return (
    <Card className="spending-item">
      <SpendingDate date={props.date}></SpendingDate>

      <div className="spending-item__description">
        <h2>{props.title}</h2>
        <div className="spending-item__price">Rp {props.amount}</div>
      </div>
    </Card>
  );
}

export default SpendingItem;
