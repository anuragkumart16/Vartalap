import React from "react";

function Holderdiv({ children,flexDirection='column', height="auto", width="auto", display="flex",gap="1rem",style }) {
  return (
    <div
      style={{
        flexDirection: flexDirection,
        display: display,
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 2rem",
        backgroundColor: "#FFFFFF",
        border:'1px solid black',
        borderRadius:'1rem',
        height: height,
        width: width,
        fontSize:'1.2rem',
        fontFamily:'Helvetica Neue',
        gap:gap,
        ...style
      }}
    >
        {children}
    </div>
  );
}

export default Holderdiv;
