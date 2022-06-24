import { useContext } from "react";
import { DateContext } from "../../Context";
import {
  getShortDate,
  getMediumDate,
  nextWeek,
  getMonth,
  getYear,
} from "../../Utils/DateUtils";

function Display(props) {
  const { mode, date } = useContext(DateContext)[0];

  let display;
  switch (mode) {
    case "day":
      display = getMediumDate(date);
      break;
    case "week":
      display = `${getShortDate(date)} - ${getShortDate(nextWeek(date))}`;
      break;
    case "month":
      display = getMonth(date);
      break;
    case "year":
      display = getYear(date);
      break;
    default:
      display = "";
  }

  return <button className="display">{display}</button>;
}
export default Display;
