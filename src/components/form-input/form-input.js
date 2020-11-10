import React from "react";

const FormInput = ({ handleChange, label, ...others }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...others}
      />
      {label ? (
        <label
          className={`${others.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
