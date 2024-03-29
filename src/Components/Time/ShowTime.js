import { useEffect, useState } from "react";
import CalculateTime from "./CalculateTime";
import "./ShowTime.css";
const ShowTime = (props) => {
  const hoursInMs = props.givenTime.hours * 3600000;
  const minitueInMs = props.givenTime.minitue * 60000;
  const secondsInMs = props.givenTime.seconds * 1000;
  const nowInMs = new Date().getTime();
  const givenTimeInMs = hoursInMs + minitueInMs + secondsInMs;
  const timeAfterGivenTime = nowInMs + givenTimeInMs + 20;
  const afterSomeTime = new Date(timeAfterGivenTime).getTime();

  const [remaining, setRemaining] = useState(givenTimeInMs);
  useEffect(() => {
    setRemaining(afterSomeTime - new Date().getTime());
  }, [givenTimeInMs]);

  return (
    <div>
      <CalculateTime remaining={remaining}></CalculateTime>
    </div>
  );
};
export default ShowTime;
