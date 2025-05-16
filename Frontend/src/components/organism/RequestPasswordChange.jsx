import React, { useState } from "react";
import Heading from "../atom/Heading";
import { resetPassword } from "../../utils/apicalls/user";
import { useNavigate } from "react-router-dom";

function RequestPasswordChange({ setter }) {
  const navigate = useNavigate();
  const [btnColor, SetBtnColor] = useState("#2d2d2e");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target[0].value;
    if (!value){
        setMessage('Please enter email or username')
        setStatus(false)
        return
    }
    let email
    let username
    if (value.includes("@")) {
        email = value
    }else{
        username = value 
    }
   
    resetPassword(email, username)
      .then((data) => {
        if (data.success) {
          setMessage(data.message);
          setStatus(true);
          setTimeout(() => {
            setter("otp");
          }, 1000);
        } else {
          setStatus(false);
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        navigate("/error", {
          state: {
            error: "Server Error!",
            message:
              "Unable to connect to server at the moment, We are working on it, please try again later",
          },
        });
      });
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Heading>Change Password</Heading>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          margin: "1rem 0rem",
          boxShadow: "0px 0px 2px 0px",
          padding: "3rem 2rem",
          borderRadius: "1rem",
          backgroundColor: "white",
        }}
      >
        {message && (
          <>
            {status ? (
              <p style={{ color: "green" }}>{message}</p>
            ) : (
              <p style={{ color: "red" }}>{message}</p>
            )}
          </>
        )}
        <div>
          <label>Enter your email or username</label>
          <input
            type="text"
            placeholder="Email or Username"
            style={{
              width: "100%",
              padding: "0.5rem 0.5rem",
              borderRadius: "8px",
              border: "1px solid black",
              fontSize: "0.8rem",
              fontFamily: "Helvetica Neue",
              marginTop: "0.5rem",
            }}
          />
        </div>
        <button
          style={{
            border: "none",
            backgroundColor: btnColor,
            color: "white",
            padding: "0.5rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onMouseEnter={() => SetBtnColor("black")}
          onMouseLeave={() => SetBtnColor("#2d2d2e")}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RequestPasswordChange;
