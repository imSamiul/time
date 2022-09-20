import { useEffect, useState } from "react";
import CircularProgressBar from "../UI/CircularProgressBar";

const CalculateTime = (props) => {
  const timeAfterGivenTime = props.timeAfterGivenTime;
  const afterSomeTime = new Date(timeAfterGivenTime).getTime();
  const remaining = afterSomeTime - new Date().getTime();
  const [countDown, setCountDown] = useState(remaining);
  useEffect(() => {
    setCountDown(remaining);
  }, [timeAfterGivenTime]);

  const seconds = Math.floor((countDown / 1000) % 60);
  const minutes = Math.floor((countDown / (1000 * 60)) % 60);
  const hours = Math.floor((countDown / (1000 * 60 * 60)) % 24);
  const initialTime = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  const [time, setTime] = useState(initialTime);
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    if (countDown >= 0) {
      console.log("countDown", countDown);
      const interval = setInterval(() => {
        setCountDown(countDown - 1000);
      }, 1000);

      const remainingTime = {
        hours: Math.floor((countDown / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((countDown / (1000 * 60)) % 60),
        seconds: Math.floor((countDown / 1000) % 60),
      };
      setTime((prevTime) => ({
        ...prevTime,
        ...remainingTime,
      }));
      return () => clearInterval(interval);
    }
  }, [countDown]);

  return (
    <CircularProgressBar
      strokeWidth="25"
      sqSize="300"
      percentage={80}
      time={time}
    />
  );
};

export default CalculateTime;
