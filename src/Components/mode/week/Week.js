import { days, addDays, isDateEqual } from "../../../Utils/DateUtils";
import RowHeaderContainer from "../cells/RowHeaderContainer";
import DayOfWeek from "../days/DayOfWeek";

function Week(props) {
  const dayWiseEvents = Array(7).fill([]);
  props.events.forEach((event) =>
    dayWiseEvents[event.date.getDay()].push(event)
  );

  const currentDate = new Date();
  const flag = isDateEqual(props.date, currentDate);
  const currentDay = currentDate.getDay();

  const dayCols = days.map((day) => (
    <DayOfWeek
      date={addDays(props.date, day)}
      key={day}
      events={dayWiseEvents[day]}
      className={flag && currentDay === day ? "now" : ""}
    />
  ));

  return (
    <div className="week">
      <RowHeaderContainer date={props.date} />
      <div className="week-container">{dayCols}</div>
    </div>
  );
}

export default Week;
