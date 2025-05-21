import React, { useState } from "react";
import TextArea from "../molecule/TextArea";
import { FiPlus } from "react-icons/fi";
import { MdOutlineMic } from "react-icons/md";

function ChatHolderFoot({
  fileOptions = true,
  micoption = true,
  showSendBtn = false,
}) {
  const [sendBtn, setSendBtn] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#F4F4F4",
        borderTop: "1px solid #e4ded6",
        width: "100%",
        padding: "1rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {fileOptions && (
        <FiPlus size={"1.3rem"} style={{ marginRight: "0.5rem" }} />
      )}
      <TextArea setSendBtn={setSendBtn} />
      {(sendBtn || showSendBtn) && (
        <img
          src="icon/send.svg"
          style={{ height: "1.8rem", marginLeft: "0.5rem", cursor: "pointer" }}
        />
      )}
      {micoption && !sendBtn && (
        <MdOutlineMic
          size={"1.3rem"}
          style={{ marginLeft: "0.5rem", cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default ChatHolderFoot;
