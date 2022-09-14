import { useState } from "react";
import CircularProgressBar from "../UI/ProgressBar";
import "./ShowTime.css";
const ShowTime = (props) => {
  const [percentage, setPercentage] = useState(0);
  const hoursInMs = props.givenTime.hours * 3600000;
  const minitueInMs = props.givenTime.minitue * 60000;
  const secondsInMs = props.givenTime.seconds * 1000;
  const nowInMs = new Date().getTime();
  const givenTimeInMs = hoursInMs + minitueInMs + secondsInMs;
  const dateTimeAfterGivenTime = nowInMs + givenTimeInMs;
  const timeLeftInMs = dateTimeAfterGivenTime - nowInMs;
  return (
    console.log(timeLeftInMs),
    (
      <div>
        <CircularProgressBar strokeWidth="25" sqSize="300" percentage={80} />
      </div>
    )
  );
};
export default ShowTime;
