import RowHeaderContainer from "../cells/RowHeaderContainer";
import DayOfWeek from "./DayOfWeek";

function Day(props) {
  return (
    <div className="day">
      <RowHeaderContainer />
      <DayOfWeek {...props} />
    </div>
  );
}

export default Day;
