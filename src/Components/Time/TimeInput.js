import { useRef } from "react";
import Input from "../UI/Input";
import "./Time.css";

const TimeInput = (props) => {
  const givenHours = useRef();
  const givenMinitue = useRef();
  const givenSeconds = useRef();
  const myForm = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(myForm.current.butttonId);
    const enteredHours = givenHours.current.value;
    const enteredMinitue = givenMinitue.current.value;
    const enteredSeconds = givenSeconds.current.value;
    props.onHandleInputTime(enteredHours, enteredMinitue, enteredSeconds);
  };
  return (
    <div className="ui grid middle aligned time">
      <form className="ui form" onSubmit={submitHandler} ref={myForm}>
        <div className="fields">
          <Input
            ref={givenHours}
            label="Hours"
            type="number"
            placeholder="hours"
          ></Input>
          <Input
            ref={givenMinitue}
            label="Minitues"
            type="number"
            placeholder="minitue"
          ></Input>
          <Input
            ref={givenSeconds}
            label="Seconds"
            type="number"
            placeholder="second"
          ></Input>
        </div>
        <button
          className="ui green button"
          id="test1"
          onClick={(e) => (myForm.current.buttonId = e.target.id)}
        >
          Start
        </button>
        <button className="ui red button">Reset</button>
      </form>
    </div>
  );
};
export default TimeInput;
