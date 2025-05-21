import React, { useEffect, useRef, useState } from "react";
import Heading from "../atom/Heading";
import Holderdiv from "../atom/Holderdiv";
import SearchBar from "../molecule/SearchBar";
import { getMembers } from "../../services/member";
import { useNavigate } from "react-router-dom";
import SmallTabBody from "./SmallTabBody";

function GetMember() {
    const inputRef = useRef(null);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (searchText.length === 0) {
      return;
    } else if (searchText.length % 2 === 0) {
      getMembers(searchText.trim())
        .then((data) => {
          setList(data.data);
        })
        .catch(() => {
          navigate("/error", {
            state: {
              error: "Server Error!",
              message:
                "Unable to connect to server at the moment, We are working on it, please try again later",
            },
          });
        });
    }
  }, [searchText, navigate]);

  return (
    <Holderdiv
      style={{
        margin: "2rem",
        maxHeight: "90vh",
        overflow: "auto",
        border: "1px solid #eae7e3",
      }}
      width="80%"
    >
      <Heading>Find Friends</Heading>
      <SearchBar changeHandler={setSearchText} reference={inputRef} />
      {searchText.length > 0 && (
        <SmallTabBody
          style={{ marginTop: "1rem", width: "100%", position: "relative" }}
          list={list}
          emptyMessage="No Users Found!"
          handleClick={(id) =>{
            console.log(id)
            setList([])
            setSearchText("")
            inputRef.current.value = ""
        }}
        />
      )}
    </Holderdiv>
  );
}

export default GetMember;
