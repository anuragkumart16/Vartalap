import React, { useEffect, useRef, useState } from "react";
import { HiOutlineFaceSmile } from "react-icons/hi2";
function TextArea({ style, setSendBtn }) {
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      setSendBtn(true);
    }else{
      setSendBtn(false);
    }
  }, [setSendBtn, text]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "0.5rem",
        border: "1px solid #e4ded6",
        borderRadius: "1.5rem",
        ...style,
        flex: "1",
      }}
    >
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onInput={(e) => {
          e.target.style.height = "1rem"; // reset first
          const scrollHeight = e.target.scrollHeight;
          if (scrollHeight <= 80) {
            // 5rem = 80px
            e.target.style.height = scrollHeight + "px";
            e.target.style.overflowY = "hidden";
          } else {
            e.target.style.height = "8rem";
            e.target.style.overflowY = "auto";
          }
        }}
        style={{
          border: "none",
          backgroundColor: "#ffffff",
          outline: "none",
          width: "100%",
          height: "1rem",
          maxHeight: "8rem",
          resize: "none",
          flex: "1",
          fontFamily: "Helvetica Neue",
        }}
      ></textarea>
      <HiOutlineFaceSmile size={"1.2rem"} />
    </div>
  );
}

export default TextArea;
