import React, { useState } from "react";
import Heading from "../atom/Heading";
import { verifyOTP } from "../../utils/apicalls/user";

function OTP({ setter }) {

  const [btnColor, SetBtnColor] = useState("#2d2d2e");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const otp = e.target[0].value;
    if(!otp){
        setMessage('Please enter OTP')
        setStatus(false)
        return
    }

    verifyOTP(otp)
      .then((data) => {
        if (data.success) {
          setMessage(data.message);
          setStatus(true);
          setTimeout(() => {
            setter("changepassword");
          }, 1000);
        } else {
          setStatus(false);
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
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
          <label>Enter OTP</label>
          <input
            type="text"
            placeholder="OTP"
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

export default OTP;
