import Cell from "../cells/Cell";
import HeaderCell from "../cells/HeaderCell";
import { hours } from "../../../Utils/DateUtils";
import Event from "../Event";

function findEvent(events, date) {
  return events.find((event) => event.date === date);
}

function DayOfWeek(props) {
  const cells = hours.map((hour) => {
    let dateTime = props.date;
    dateTime.setHours(hour);
    const event = findEvent(props.events, dateTime);
    return (
      <Cell date={dateTime} key={dateTime}>
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
