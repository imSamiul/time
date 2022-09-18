import { useEffect, useState } from "react";
import CircularProgressBar from "../UI/CircularProgressBar";

const CalculateTime = ({ timeAfterGivenTime }) => {
  const afterSomeTime = new Date(timeAfterGivenTime);
  const [countDown, setCountDown] = useState(afterSomeTime);
  const seconds = Math.floor((countDown / 1000) % 60);
  const minutes = Math.floor((countDown / (1000 * 60)) % 60);
  const hours = Math.floor((countDown / (1000 * 60 * 60)) % 24);
  const initialTime = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  console.log(countDown, initialTime);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(afterSomeTime - new Date().getTime());
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
