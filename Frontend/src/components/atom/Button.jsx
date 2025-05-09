import React, { useState } from "react";

function Button({
  children,
  onclick = () => {},
  type = "primary",
  width = "auto",
}) {
  const [hover, setHover] = useState(false);

  const PrimaryStyle = {
    backgroundColor: hover ? "black" : "#24D366",
    color: hover ? "white" : "black",
    border: "1px solid black",
    borderRadius: "2rem",
    width: width,
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    cursor: "pointer",
    userSelect: "none",
  };

  const SecondaryStyle = {
    backgroundColor: hover ? "black" : "white",
    color: hover ? "white": "black" ,
    border: "1px solid black",
    borderRadius: "2rem",
    width: width,
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    cursor: "pointer",
    userSelect: "none",
  };
  
  return (
    <button
      onclick={onclick}
      style={type === "primary" ? PrimaryStyle : SecondaryStyle}
      type={type}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
}

export default Button;
