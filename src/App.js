import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { Context } from "./Context";
import { useReducer } from "react";
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
  resetMonthDay,
  resetWeekday,
} from "./Utils/DateUtils";
import Week from "./Components/mode/week/Week";

const reducer = (state, action) => {
  const { mode, dir } = action;
  if (dir === "mode-change") {
    switch (mode) {
      case "day":
        return { ...state, mode: mode };
      case "week":
        return { date: resetWeekday(state.date), mode: mode };
      case "month":
        return { date: resetMonthDay(state.date), mode: mode };
      case "year":
      default:
        return state;
    }
  }

  switch (mode) {
    case "day":
      return dir === "left"
        ? { ...state, date: prevDay(state.date) }
        : { ...state, date: nextDay(state.date) };
    case "week":
      return dir === "left"
        ? { ...state, date: prevWeek(state.date) }
        : { ...state, date: nextWeek(state.date) };
    case "month":
      return dir === "left"
        ? { ...state, date: prevMonth(state.date) }
        : { ...state, date: nextMonth(state.date) };
    case "year":
      return dir === "left"
        ? { ...state, date: prevYear(state.date) }
        : { ...state, date: nextYear(state.date) };
    default:
      return state;
  }
};

function displayLayout({ mode, date }) {
  switch (mode) {
    case "day":
      return <Day date={date} events={[]} />;
    case "week":
      return <Week date={date} events={[]} />;
    case "month":
    case "year":
    default:
      return;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    date: new Date(),
    mode: "day",
  });

  return (
    <div className="App">
      <Context.Provider value={[state, dispatch]}>
        <header className="App-header">
          <Navbar />
        </header>
        <main>{displayLayout(state)}</main>
      </Context.Provider>
    </div>
  );
}

export default App;
