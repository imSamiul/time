import "./ShowTime.css";
import CountDownUpdate from "./CountDownUptate";
const CalculateTime = (props) => {
  const hoursInMs = props.givenTime.hours * 3600000;
  const minitueInMs = props.givenTime.minitue * 60000;
  const secondsInMs = props.givenTime.seconds * 1000;
  const nowInMs = new Date().getTime();
  const givenTimeInMs = hoursInMs + minitueInMs + secondsInMs;
  const dateTimeAfterGivenTime = nowInMs + givenTimeInMs;
  const timeLeftInMs = dateTimeAfterGivenTime - nowInMs;

  return (
    <div>
      <CountDownUpdate timeLeftInMs={dateTimeAfterGivenTime}></CountDownUpdate>
    </div>
  );
};
export default CalculateTime;
