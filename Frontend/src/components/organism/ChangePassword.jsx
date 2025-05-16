import React, { useEffect, useState } from "react";
import Heading from "../atom/Heading";
import { updatePassword } from "../../utils/apicalls/user";
import { useNavigate } from "react-router-dom";

function ChangePassword({ setter }) {
  const navigate = useNavigate();
  const [btnColor, SetBtnColor] = useState("#2d2d2e");
  const [showPassowrd, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(false);

  function handleSubmit(e){
    e.preventDefault()
    setPassword(e.target[0].value)
    setConfirmPassword(e.target[1].value)

    if (password !== confirmPassword) {
      setStatus(false);
      setMessage("Passwords do not match");
      return
    }

    updatePassword(password)
    .then((data)=>{
      if (data.success){
        setMessage(data.message)
        setStatus(true)
        setTimeout(()=>{
          setter('login')
        },2000)
      }else{
        setMessage(data.message)
        setStatus(false)
      }
    })
    .catch((error)=>{
      console.log(error)
      navigate('/error',{state:{error:'Server Error!',message:'Unable to connect to server at the moment, We are working on it, please try again later'}})
    })

  }

  useEffect(() => {
    if (password==='' && confirmPassword === '') {
      return
    }
    if (password !== confirmPassword) {
      setStatus(false);
      setMessage("Passwords do not match");
    }else{
      setStatus(true)
      setMessage('Passwords Match')
    }
  }, [password, confirmPassword]);

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
        onSubmit={(e) => handleSubmit(e)}
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
          <label>New password</label>
          <input
            type={showPassowrd ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label>Confirm password</label>
            <label
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassowrd)}
            >
              {showPassowrd ? "Hide " : "Show "}password
            </label>
          </div>
          <input
            type={showPassowrd ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          Update
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
