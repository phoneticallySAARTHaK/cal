import Cell from "../cells/Cell";
import HeaderCell from "../cells/HeaderCell";
import { hours, isDateEqual } from "../../../Utils/DateUtils";
import Event from "../Event";

function findEvent(events, date) {
  return events.find((event) => event.date.getHours() === date.getHours());
}

function DayOfWeek(props) {
  const currentDate = new Date();
  const flag = isDateEqual(props.date, currentDate);
  const currentHour = currentDate.getHours();

  const cells = hours.map((hour) => {
    let dateTime = new Date(props.date.valueOf());
    dateTime.setHours(hour, 0, 0);
    const event = findEvent(props.events, dateTime);

    return (
      <Cell
        date={dateTime}
        key={hour}
        className={flag && currentHour === hour ? "now" : ""}
      >
        {event ? <Event {...event} /> : null}
      </Cell>
    );
  });

  return (
    <div className="day-of-week">
      <HeaderCell date={props.date} className={props.className} />
      {cells}
    </div>
  );
}

export default DayOfWeek;
