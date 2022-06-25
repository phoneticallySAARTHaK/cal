import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { DateContext, EventContext } from "./Context";
import { useReducer, useState } from "react";
import {
  getStoredEvents,
  eventReducer,
  dateReducer,
  displayLayout,
} from "./Utils/StateUtils";
import Sidebar from "./Components/sidebar/Sidebar";

function App() {
  const [events, modifyEvents] = useReducer(eventReducer, () => {
    return getStoredEvents();
  });

  const [state, modifyDate] = useReducer(dateReducer, {
    date: new Date(),
    mode: "day",
  });

  const [sidebarState, setsidebarState] = useState({
    isVisible: false,
    date: state.date,
  });

  return (
    <div className="App">
      <DateContext.Provider value={[state, modifyDate]}>
        <EventContext.Provider value={setsidebarState}>
          <header className="App-header">
            <Navbar />
          </header>
          <main>{displayLayout(state)}</main>
          <aside>
            <Sidebar state={sidebarState} setState={setsidebarState} />
          </aside>
        </EventContext.Provider>
      </DateContext.Provider>
    </div>
  );
}

export default App;
