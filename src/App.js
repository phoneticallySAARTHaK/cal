import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { DateContext, EventContext } from "./Context";
import { useReducer } from "react";
import {
  getStoredEvents,
  eventReducer,
  dateReducer,
  displayLayout,
} from "./Utils/StateUtils";

function App() {
  const eventState = useReducer(eventReducer, () => {
    return getStoredEvents();
  });

  const [state, modifyDate] = useReducer(dateReducer, {
    date: new Date(),
    mode: "day",
  });

  return (
    <div className="App">
      <DateContext.Provider value={[state, modifyDate]}>
        <EventContext.Provider value={eventState}>
          <header className="App-header">
            <Navbar />
          </header>
          <main>{displayLayout(state)}</main>
        </EventContext.Provider>
      </DateContext.Provider>
    </div>
  );
}

export default App;
