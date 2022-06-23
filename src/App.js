import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { ModeContext } from "./Context";
import { useState } from "react";
import Week from "./Components/mode/Week";
import DayOfWeek from "./Components/mode/days/DayOfWeek";
import Day from "./Components/mode/days/Day";

function App() {
  const ModeState = useState("day");

  function displayLayout() {
    switch (ModeState[0]) {
      case "day":
        return <Day date={new Date()} events={[]} />;
      case "week":
        return <Week date={new Date()} />;
      case "month":
      case "year":
      default:
        return;
    }
  }

  return (
    <div className="App">
      <ModeContext.Provider value={ModeState}>
        <header className="App-header">
          <Navbar />
        </header>
        <main>{displayLayout()}</main>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
