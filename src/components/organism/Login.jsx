import React, { useState } from "react";
import Heading from "../atom/Heading";
import { useNavigate } from "react-router-dom";

function Login({ setter }) {
  const navigate = useNavigate()
  const [btnColor, SetBtnColor] = useState("#2d2d2e");
  const [showPassowrd, setShowPassword] = useState(false);
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
      <Heading>Login</Heading>
      <form
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
          <label>Username or Email</label>
          <input
            type="text"
            placeholder="Username"
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
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <label>Password</label>
          <label style={{marginLeft:'auto',cursor:'pointer'}} onClick={()=>setShowPassword(!showPassowrd)}>{showPassowrd ? 'Hide ':'Show ' }password</label>
          </div>
          <input
            type={showPassowrd ? "text" : "password"}
            placeholder="Password"
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
        <label onClick={()=>setter('changepassword')} style={{cursor:'pointer'}}>Forgot Password?</label>
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
          onClick={() => navigate('/chat')}
        >
          Login
        </button>
        <label>Don't have an account? <span style={{color:'blue',cursor:'pointer',textDecoration:'underline'}} onClick={()=>setter('signup')}>Signup</span></label>
      </form>
    </div>
  );
}

export default Login;
