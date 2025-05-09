import React from "react";

function Input({ type = "text", width = "100%",placeholder="", name="" }) {
  return (
    <input
      type={type}
      style={{
        width: width,
        padding: "0.25rem 0.25rem",
        borderRadius: "4px",
        border: "none",
        fontSize: "0.8rem",
        fontFamily: "Helvetica Neue",
        color:'black',
        outline:'none'
      }}
      placeholder={placeholder} 
      name={name}
    />
  );
}

export default Input;
