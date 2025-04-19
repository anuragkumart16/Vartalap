import React from "react";

function Input({ type = "text", width = "auto",placeholder="", name="" }) {
  return (
    <input
      type={type}
      style={{
        width: width,
        padding: "1rem 1rem",
        borderRadius: "1rem",
        border: "1px solid black",
        fontSize: "1rem",
        fontFamily: "Helvetica Neue",
      }}
      placeholder={placeholder} 
      name={name}
    />
  );
}

export default Input;
