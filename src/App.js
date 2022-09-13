import ShowTime from "./Components/Time/ShowTime";
import Time from "./Components/Time/TimeInput";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="ui grid content">
        <div className="ui row">
          <div class="column">
            <ShowTime></ShowTime>
          </div>
        </div>
        <div className="ui row">
          <div class="column">
            <Time></Time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
