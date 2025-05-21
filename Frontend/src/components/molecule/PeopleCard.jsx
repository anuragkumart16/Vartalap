import React from "react";
import { MdAccountCircle } from "react-icons/md";
import Text from "../atom/Text";
import SmallText from "../atom/SmallText";

function PeopleCard({ name, subtext, imgurl, id, handleClick }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "1rem", cursor:'pointer' }}
      data-userid={id}
      onClick={(e)=>handleClick(e.currentTarget.dataset.userid)}
    >
      {imgurl ? (
        <img
          src={imgurl}
          style={{ height: "3rem", marginRight: "0.5rem", borderRadius: "50%" }}
        />
      ) : (
        <MdAccountCircle size={"3rem"} style={{ marginRight: "0.5rem" }} />
      )}
      <div>
        <Text>{name || "Loading..."}</Text>
        <SmallText>{subtext || "Loading..."}</SmallText>
      </div>
    </div>
  );
}

export default PeopleCard;
