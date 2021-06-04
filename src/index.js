import React from "react";
import ReactDOM from "react-dom";
let date = new Date();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.timeUpdate = this.timeUpdate.bind(this);

    this.state = {
      time: undefined,
    };
  }
  timeUpdate() {
    console.log("called");
    this.setState({ time: date.getSeconds() });
  }
  componentDidMount() {
    this.interval = setInterval(this.timeUpdate, 1000);
  }
  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
