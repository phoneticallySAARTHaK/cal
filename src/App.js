import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { ModeContext } from "./Context";
import { useReducer, useState } from "react";
import Day from "./Components/mode/days/Day";
import {
  nextDay,
  nextMonth,
  nextWeek,
  nextYear,
  prevDay,
  prevMonth,
  prevWeek,
  prevYear,
} from "./Utils/DateUtils";

const reducer = (date, action) => {
  const { mode, dir } = action;
  switch (true) {
    case mode === "day":
      return dir === "left" ? prevDay(date) : nextDay(date);
    case mode === "week":
      return dir === "left" ? prevWeek(date) : nextWeek(date);
    case mode === "month":
      return dir === "left" ? prevMonth(date) : nextMonth(date);
    case mode === "year":
      return dir === "left" ? prevYear(date) : nextYear(date);
    default:
      return date;
  }
};

function displayLayout(mode) {
  switch (mode) {
    case "day":
      return <Day date={new Date()} events={[]} />;
    case "week":
    case "month":
    case "year":
    default:
      return;
  }
}

function App() {
  const ModeState = useState("day");
  const [date, dispatch] = useReducer(reducer, new Date());

  return (
    <div className="App">
      <ModeContext.Provider value={ModeState}>
        <header className="App-header">
          <Navbar dispatch={dispatch} />
        </header>
        <main>{displayLayout(ModeState[0])}</main>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
