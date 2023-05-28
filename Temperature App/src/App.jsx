import React from "react";
import { useState } from "react";

const App = () => {
  const [temperatureValue, settemperatureValue] = useState(10);
  const [temperatureColor,setTemperatureColor]=useState("cold")

  
  
  return (
    <div className="app-container">
      <div classname="temperature=display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue} C</div>
      </div>
      <div className="button-container">
        <button onClick={() => settemperatureValue(temperatureValue+1)}>+</button>
        <button onClick={()=>settemperatureValue(temperatureValue-1)}>-</button>
      </div>
    </div>
  );
};

export default App;
