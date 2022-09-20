import { useEffect, useState } from "react";
import CalculateTime from "./CalculateTime";
import "./ShowTime.css";
const ShowTime = (props) => {
  const [remaining, setRemaining] = useState(0);
  const hoursInMs = props.givenTime.hours * 3600000;
  const minitueInMs = props.givenTime.minitue * 60000;
  const secondsInMs = props.givenTime.seconds * 1000;
  const nowInMs = new Date().getTime();
  const givenTimeInMs = hoursInMs + minitueInMs + secondsInMs;
  const timeAfterGivenTime = nowInMs + givenTimeInMs + 20;
  const afterSomeTime = new Date(timeAfterGivenTime).getTime();
  useEffect(() => {
    setRemaining(afterSomeTime - new Date().getTime());
  }, [afterSomeTime, props.givenTime]);
  console.log("remaining", remaining);
  const percent = (remaining / remaining) * 100;
  console.log("percent", percent);

  return (
    <div>
      <CalculateTime remaining={remaining} percent={percent}></CalculateTime>
    </div>
  );
};
export default ShowTime;
