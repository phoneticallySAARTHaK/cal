import { useContext } from "react";
import { Context } from "../../Context";

function Mode(props) {
  const [state, dispatch] = useContext(Context);

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
