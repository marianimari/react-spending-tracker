import "./Spendings.css";
import SpendingItem from "./SpendingItem";
import Card from "../UI/Card";

const Spendings = (props) => {
  return (
      <Card className="spending">
        <SpendingItem title={props.item[0].title} date={props.item[0].date} amount={props.item[0].amount}/>
        <SpendingItem title={props.item[1].title} date={props.item[1].date} amount={props.item[1].amount}/>
        <SpendingItem title={props.item[2].title} date={props.item[2].date} amount={props.item[2].amount}/>
        <SpendingItem title={props.item[3].title} date={props.item[3].date} amount={props.item[3].amount}/>
      </Card>

  );
};

export default Spendings;