import Cell from "../cells/Cell";
import HeaderCell from "../cells/HeaderCell";
import { hours, isDateEqual } from "../../../Utils/DateUtils";
import Event from "../Event";

function findEvent(events, date) {
  return events.find((event) => event.date === date);
}

function DayOfWeek(props) {
  const flag = isDateEqual(props.date, new Date());
  const currentHour = new Date().getHours();

  const cells = hours.map((hour) => {
    let dateTime = props.date;
    dateTime.setHours(hour);
    const event = findEvent(props.events, dateTime);

    return (
      <Cell
        date={dateTime}
        key={dateTime}
        className={flag && currentHour === hour ? "current-hour" : ""}
      >
        {event ? <Event {...event} /> : null}
      </Cell>
    );
  });

  return (
    <>
      <HeaderCell date={props.date} />
      {cells}
    </>
  );
}

export default DayOfWeek;
