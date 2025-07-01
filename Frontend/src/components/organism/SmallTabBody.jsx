import React from "react";
import PeopleCard from "../molecule/PeopleCard";

function SmallTabBody({
  list = [],
  style,
  emptyMessage = "No Users Found",
  handleClick,
}) {
  console.log(list)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "0rem 1rem",
        overflowY: "scroll",
        ...style,
      }}
    >
      {list.map((item, index) => (
        <PeopleCard
          key={index}
          name={item.username || 'Loading...'}
          subtext={item.email || 'Loading...'}
          id={item._id}
          imgurl={item.profilePicture}
          handleClick={handleClick}
        />
      ))}
      {list.length == 0 && (
        <p
          style={{ textAlign: "center", fontSize: "1.2rem", color: "#8c8d8d" }}
        >
          {emptyMessage}
        </p>
      )}
    </div>
  );
}

export default SmallTabBody;
