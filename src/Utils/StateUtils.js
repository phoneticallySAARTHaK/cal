import Day from "../Components/mode/days/Day";
import Week from "../Components/mode/week/Week";
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
} from "./DateUtils";

function getStoredEvents() {
  return [];
}

const eventReducer = (state, action) => {
  return state;
};

const dateReducer = (state, action) => {
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

  const isLeft = () => dir === "left";

  switch (mode) {
    case "day":
      return isLeft()
        ? { ...state, date: prevDay(state.date) }
        : { ...state, date: nextDay(state.date) };
    case "week":
      return isLeft()
        ? { ...state, date: prevWeek(state.date) }
        : { ...state, date: nextWeek(state.date) };
    case "month":
      return isLeft()
        ? { ...state, date: prevMonth(state.date) }
        : { ...state, date: nextMonth(state.date) };
    case "year":
      return isLeft()
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

export { getStoredEvents, eventReducer, dateReducer, displayLayout };
