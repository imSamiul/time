import Input from "../UI/Input";
import "./Time.css";

const Time = () => {
  return (
    <div className="ui grid middle aligned time">
      <form className="ui form">
        <div className="fields">
          <Input label="Hours" type="number" placeholder="hours"></Input>
          <Input label="Minitues" type="number" placeholder="minitue"></Input>
          <Input label="Seconds" type="number" placeholder="second"></Input>
        </div>
        <button className="ui green button">Start</button>
        <button className="ui red button">Reset</button>
      </form>
    </div>
  );
};
export default Time;
