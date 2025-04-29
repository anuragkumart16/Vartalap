import React from "react";
import Input from "../atom/Input";
function SearchBar() {
  return (
    <div
      style={{
        border: "1px solid #eae7e3",
        margin: "0rem 0rem",
        borderRadius: "6px",
        padding: "0.15rem 0.25rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src="icon/Search Glyph.svg"
        style={{ height: "14px", width: "auto" }}
      />
      <Input placeholder="Search" />
    </div>
  );
}

export default SearchBar;
