import { useEffect, useState } from "react";
import CircularProgressBar from "../UI/CircularProgressBar";

const CalculateTime = ({ percent, remaining, checkFirstRender }) => {
  // const timeAfterGivenTime = props.timeAfterGivenTime;
  // const afterSomeTime = new Date(timeAfterGivenTime).getTime();
  // const remaining = afterSomeTime - new Date().getTime();
  // const percent = (remaining / remaining) * 100;
  const [check, setCheck] = useState(checkFirstRender);
  console.log(check);
  // let check = checkFirstRender;
  const [countDown, setCountDown] = useState(remaining);
  const [timeUp, setTimeUp] = useState(false);
  const [percentage, setPercentage] = useState(percent);
  // console.log("timeUp", timeUp);
  useEffect(() => {
    setCountDown(() => remaining);
    setTimeUp(() => false);
  }, [remaining]);

  const seconds = Math.floor((countDown / 1000) % 60);
  const minutes = Math.floor((countDown / (1000 * 60)) % 60);
  const hours = Math.floor((countDown / (1000 * 60 * 60)) % 24);
  const initialTime = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  const [time, setTime] = useState(initialTime);
  console.log(percent, remaining);

  const handleCheck = () => {
    if (remaining > 0) {
      setCheck(true);
    }
  };

  useEffect(() => {
    if (countDown >= 0) {
      setPercentage(Math.floor((countDown / remaining) * 100));
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
      handleCheck();

      return () => {
        clearInterval(interval);
      };
    } else {
      setTimeUp(true);
    }
  }, [countDown]);

  return (
    <div>
      {check && countDown <= 0 ? (
        <div>Time Up</div>
      ) : (
        <CircularProgressBar
          strokeWidth="25"
          sqSize="300"
          percentage={percentage}
          time={time}
        />
      )}
    </div>
  );
};

export default CalculateTime;
