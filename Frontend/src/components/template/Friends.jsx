import React from "react";
import GetMember from "../organism/FriendsGetMember";


function Friends() {



  return (
    <div
      style={{
        height: "100vh",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fcf5eb",
      }}
    >
      <GetMember/>
    </div>
  );
}

export default Friends;
