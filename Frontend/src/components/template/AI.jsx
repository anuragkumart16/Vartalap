import React from "react";
import ChatHolderNav from "../organism/ChatHolderNav";
import Messageholder from "../organism/Messageholder";
import ChatHolderFoot from "../organism/ChatHolderFoot";
function AI() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#ececec",
        flex: "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChatHolderNav
        name="Vartalaap AI"
        message={"Beta Version"}
        calloptions={false}
        imageURl={"Logo.svg"}
      />
      <Messageholder />
      <ChatHolderFoot
        micoption={false}
        fileOptions={false}
        showSendBtn={true}
      />
    </div>
  );
}

export default AI;
