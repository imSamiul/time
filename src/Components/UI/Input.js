const Input = (props) => {
  return (
    <div className="field">
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};
export default Input;
