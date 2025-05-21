import React, { useContext } from "react";
import SmallText from "../atom/SmallText";
import Text from "../atom/Text";
import { MdAccountCircle } from "react-icons/md";
import { IoVideocam, IoSearchSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { PiMusicNoteFill } from "react-icons/pi";
import { ChatContext } from "../../context/ChatContext";

function ChatHolderNav({ name, message, calloptions = true, imageURl }) {
  const { chatName } = useContext(ChatContext);

  return (
    <div
      style={{
        backgroundColor: "#F4F4F4",
        height: "3rem",
        borderBottom: "1px solid #e4ded6",
        width: "100%",
        padding: "0.5rem 1rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {imageURl ? (
          <img
            src={imageURl}
            style={{
              height: "2rem",
              marginRight: "0.5rem",
              borderRadius: "50%",
            }}
          />
        ) : (
          <MdAccountCircle size="2.3rem" style={{ marginRight: "0.5rem" }} />
        )}
        <div>
          <Text>{name || chatName || "Loading..."}</Text>
          <SmallText>{message  || "Loading..."}</SmallText>
        </div>
      </div>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <PiMusicNoteFill size="1.3rem" />
        {calloptions && (
          <>
            <IoVideocam
              size="1.3rem"
              onClick={() =>
                window.open(
                  "/videocall",
                  "_blank",
                  "width=800,height=600,toolbar=no,scrollbars=yes,resizable=yes"
                )
              }
            />
            <IoMdCall
              size="1.3rem"
              onClick={() =>
                window.open(
                  "/audiocall",
                  "_blank",
                  "width=800,height=600,toolbar=no,scrollbars=yes,resizable=yes"
                )
              }
            />{" "}
          </>
        )}
        <IoSearchSharp size="1.3rem" />
      </div>
    </div>
  );
}

export default ChatHolderNav;
