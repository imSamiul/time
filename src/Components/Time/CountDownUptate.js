import { useEffect, useState } from "react";
import CircularProgressBar from "../UI/CircularProgressBar";
const CountDownUpdate = (props) => {
  const timeLeftInMs = props.timeLeftInMs;
  const countDownDate = new Date(timeLeftInMs).getTime();
  const [initLeftTime, setLeftTime] = useState(countDownDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTime((time) => countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  console.log(initLeftTime);

  return (
    <div>
      <CircularProgressBar strokeWidth="25" sqSize="300" percentage={80} />
    </div>
  );
};
export default CountDownUpdate;
