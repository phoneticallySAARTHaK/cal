import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { ModeContext, DateContext } from "./Context";
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
  switch (mode) {
    case "day":
      return dir === "left" ? prevDay(date) : nextDay(date);
    case "week":
      return dir === "left" ? prevWeek(date) : nextWeek(date);
    case "month":
      return dir === "left" ? prevMonth(date) : nextMonth(date);
    case "year":
      return dir === "left" ? prevYear(date) : nextYear(date);
    default:
      return date;
  }
};

function App() {
  const ModeState = useState("day");
  const [date, setDate] = useReducer(reducer, new Date());

  function displayLayout(mode, date) {
    switch (mode) {
      case "day":
        return <Day date={date} events={[]} />;
      case "week":
      case "month":
      case "year":
      default:
        return;
    }
  }

  return (
    <div className="App">
      <ModeContext.Provider value={ModeState}>
        <DateContext.Provider value={[date, setDate]}>
          <header className="App-header">
            <Navbar setDate={setDate} />
          </header>
          <main>{displayLayout(ModeState[0], date)}</main>
        </DateContext.Provider>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
