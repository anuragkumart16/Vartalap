import React, { useEffect, useState } from "react";
import Heading from "../atom/Heading";
import checkPassword from "../../utils/validations/checkPassword";
import checkEmail from "../../utils/validations/checkEmail";
import checkUsername from "../../utils/validations/checkUsername";
import { registerUser } from "../../services/user";
import { useNavigate } from "react-router-dom";

function Signup({ setter }) {
  const navigate = useNavigate()
  const [btnColor, SetBtnColor] = useState("#2d2d2e");
  const [showPassowrd, setShowPassword] = useState(false);
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    registerUser(email, username, password)
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
    if (Password === ''){
      return 
    }
    if (!checkPassword(Password)) {
      setStatus(false);
      setMessage("Invalid Password!");
    }
  },[Password])

  useEffect(() => {
    if (Email === ''){
      return 
    }
    const msg = checkEmail(Email);
    if (msg !== true) {
      setStatus(false);
      setMessage(msg);
    }else{
      setStatus(true);
      setMessage(msg);
    }
  },[Email])

  useEffect(() => {
    if (Username === ''){
      return 
    }
    const msg = checkUsername(Username);
    if (msg !== true) {
      setStatus(false);
      setMessage(msg);
    }else{
      setStatus(true);
      setMessage(msg);
    }
  },[Username])


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
      <Heading>Signup</Heading>
      <form
        onSubmit={(e)=>handleSubmit(e)}
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
        <div>
          {
            message && 
              <>
              {
                status ? <p style={{color:'green',wordBreak:'break-word'}}>{message}</p> : <p style={{color:'red',wordBreak:'break-word'}}>{message}</p>
              }
              </>
            
          }
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value = {Username}
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
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value = {Email}
            type="Email"
            placeholder="Email"
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
            <label>Password</label>
            <label
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassowrd)}
            >
              {showPassowrd ? "Hide " : "Show "}password
            </label>
          </div>
          <input
            type={showPassowrd ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value = {Password}
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
          Create account
        </button>
        <label>
          Already have an account?{" "}
          <span
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => setter("login")}
          >
            Login
          </span>
        </label>
      </form>
    </div>
  );
}

export default Signup;
