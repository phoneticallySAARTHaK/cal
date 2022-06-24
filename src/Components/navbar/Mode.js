import { useContext } from "react";
import { DateContext } from "../../Context";

function Mode(props) {
  const [state, dispatch] = useContext(DateContext);

  return (
    <select
      className="mode"
      value={state.mode}
      onChange={(e) =>
        dispatch({ ...state, mode: e.target.value, dir: "mode-change" })
      }
    >
      <option value="day">Day</option>
      <option value="week">Week</option>
      <option value="month">Month</option>
      <option value="year">Year</option>
      <option value="event">Event</option>
    </select>
  );
}

export default Mode;
