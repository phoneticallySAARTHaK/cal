import "./App.css";
import Navbar from "./navbar/Navbar";
import { ModeContext } from "./Context";
import { useState } from "react";

function App() {
  const ModeState = useState("day");

  return (
    <div className="App">
      <ModeContext.Provider value={ModeState}>
        <header className="App-header">
          <Navbar />
        </header>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
