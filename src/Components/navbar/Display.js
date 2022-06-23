import { useContext } from "react";
import { DateContext, ModeContext } from "../../Context";
import {
  getShortDate,
  getMediumDate,
  nextWeek,
  getMonth,
  getYear,
} from "../../Utils/DateUtils";

function Display(props) {
  const [mode] = useContext(ModeContext);
  const [date] = useContext(DateContext);

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

  return (
    <div className="display">
      <span>{display}</span>
    </div>
  );
}

export default Display;
