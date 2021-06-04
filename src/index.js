import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timeUpdate = this.timeUpdate.bind(this);

    this.state = {
      time: undefined,
    };
  }
  timeUpdate() {
    let date = new Date();
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
