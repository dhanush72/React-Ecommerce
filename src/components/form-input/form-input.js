import React from "react";

const FormInput = ({ handleChange, label, ...others }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...others} />
      {label ? (
        <label className={`${others.value ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
