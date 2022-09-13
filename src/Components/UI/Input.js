import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="field">
      <label>{props.label}</label>
      <input ref={ref} type={props.type} placeholder={props.placeholder} />
    </div>
  );
});
export default Input;
