import React, { useState } from "react";
import TextArea from "../molecule/TextArea";
import { FiPlus } from "react-icons/fi";
import { MdOutlineMic } from "react-icons/md";

function ChatHolderFoot({
  fileOptions = true,
  micoption = true,
  showSendBtn = false,
  onSend = () => {},
}) {
  const [sendBtn, setSendBtn] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
      setSendBtn(false);
    }
  };

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
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <textarea
          value={message}
          onChange={e => {
            setMessage(e.target.value);
            setSendBtn(!!e.target.value);
          }}
          placeholder="Type a message..."
          style={{
            border: "none",
            backgroundColor: "#ffffff",
            outline: "none",
            width: "100%",
            minHeight: "2rem",
            maxHeight: "4.5rem",
            resize: "none",
            borderRadius: "1.5rem",
            fontFamily: "Helvetica Neue",
            padding: '0.5rem 2rem',
            fontSize: '1rem',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
            overflowY: 'auto',
          }}
          rows={1}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        {(sendBtn || showSendBtn) && (
          <img
            src="icon/send.svg"
            style={{ height: "1.8rem", marginLeft: "0.5rem", cursor: "pointer" }}
            onClick={handleSend}
            alt="Send"
          />
        )}
      </div>
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
