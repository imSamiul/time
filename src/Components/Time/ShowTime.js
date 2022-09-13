import { useState } from "react";
import CircularProgressBar from "../UI/ProgressBar";
import "./ShowTime.css";
const ShowTime = (props) => {
  const [percentage, setPercentage] = useState(0);

  return (
    console.log(props.givenTime),
    (
      <div>
        <CircularProgressBar strokeWidth="25" sqSize="300" percentage={80} />
      </div>
    )
  );
};
export default ShowTime;
