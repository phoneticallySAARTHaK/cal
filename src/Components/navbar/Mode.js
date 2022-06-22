import { useContext } from "react";
import { ModeContext } from "../../Context";

function Mode(props) {
  const [mode, setMode] = useContext(ModeContext);

  function handleChange(event) {
    setMode(event.target.value);
  }

  return (
    <select className="mode" value={mode} onChange={handleChange}>
      <option value="day">Day</option>
      <option value="week">Week</option>
      <option value="month">Month</option>
      <option value="year">Year</option>
      <option value="event">Event</option>
    </select>
  );
}

export default Mode;
