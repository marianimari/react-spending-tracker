import "./SpendingDate.css";

const SpendingDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="spending-date">
      <div className="spending-date__day">{day}</div>
      <div className="spending-date__month">{month}</div>
      <div className="spending-date__year">{year}</div>
    </div>
  );
}

export default SpendingDate;
