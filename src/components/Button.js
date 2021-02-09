import React from "react";

const Button = ({ children }) => {
  return (
    <div className="btn_container mx-auto">
      <button type="button">{children}</button>
    </div>
  );
};

export default Button;
