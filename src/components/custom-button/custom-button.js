import React from "react";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...others }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...others}
    >
      {children}
    </button>
  );
};

export default CustomButton;
