import React from "react";
import { useState } from "react";

const App = () => {
  const [temperatureValue, settemperatureValue] = useState(10);
  return (
    <div className="app-container">
      <div classname="temperature=display-container">
        <div className="temperature-display">{temperatureValue}^C</div>
      </div>
      <div className="button-container">
        <button onClick={() => settemperatureValue}>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default App;
