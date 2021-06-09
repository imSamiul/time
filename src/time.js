import React from "react";
import AnotherTime from "./time2"
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
      this.setState({ time: date.toLocaleTimeString("en-US") });
    }
    componentDidUpdate() {}
    componentDidMount() {
      this.interval = setInterval(this.timeUpdate, 1000);
    }
    render() {
      return (
        <div>
          <p>{this.state.time}</p>
          <AnotherTime time = {this.state.time}></AnotherTime>
        </div>
      );
    }
  }
 
  export default App;