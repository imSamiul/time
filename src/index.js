import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import App from "./time"
=======

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
>>>>>>> 3da56ce62c3f9f3656cb900a4530add3efbe7ba2
ReactDOM.render(<App />, document.querySelector("#root"));
