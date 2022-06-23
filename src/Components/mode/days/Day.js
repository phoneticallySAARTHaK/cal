import { hours } from "../../../Utils/DateUtils";
import HeaderCell from "../cells/HeaderCell";
import RowHeader from "../cells/RowHeader";
import DayOfWeek from "./DayOfWeek";

function Day(props) {
  return (
    <div className="day">
      <div className="row-header-container">
        <HeaderCell date={null} />
        {hours.map((hour) => (
          <RowHeader hour={hour} key={hour} />
        ))}
      </div>
      <div className="day-container">
        <DayOfWeek {...props} />
      </div>
    </div>
  );
}

export default Day;
