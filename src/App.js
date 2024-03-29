import TimeInput from "./Components/Time/TimeInput";
import "./App.css";
import { useState } from "react";
import ShowTime from "./Components/Time/ShowTime";

function App() {
  const [givenTime, setGivenTime] = useState({
    hours: 0,
    minitue: 0,
    seconds: 0,
  });
  const handleInputTime = (hours, minitue, seconds) => {
    setGivenTime((time) => ({
      ...time,
      hours: hours,
      minitue: minitue,
      seconds: seconds,
    }));
  };
  return (
    <div className="app">
      <div className="ui grid content">
        <div className="ui row">
          <div className="column">
            <ShowTime givenTime={givenTime}></ShowTime>
          </div>
        </div>
        <div className="ui row">
          <div className="column">
            <TimeInput onHandleInputTime={handleInputTime}></TimeInput>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
