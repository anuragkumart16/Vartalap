import React, { useState } from "react";
import Heading from "../atom/Heading";
import { useNavigate } from "react-router-dom";
import checkEmail from "../../utils/validations/checkEmail";
import { login } from "../../services/user";

function Login({ setter }) {
  const navigate = useNavigate()
  const [btnColor, SetBtnColor] = useState("#2d2d2e");
  const [showPassowrd, setShowPassword] = useState(false);
  const [message,setMessage] = useState('')
  const [status,setStatus] = useState(false)


  function handleSubmit(e){
    e.preventDefault()
    console.log('function is being called!')
    const username = e.target[0].value
    const password = e.target[1].value
    
    if (checkEmail(username) === true){
      login(null,username,password)
      .then((data)=>{
        if (data.success){
          setMessage(data.message)
          setStatus(true)
          setTimeout(()=>{
            navigate('/chat')
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
    }else{
      login(username,null,password)
      .then((data)=>{
        if (data.success){
          setMessage(data.message)
          setStatus(true)
          setTimeout(()=>{
            navigate('/chat')
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
      <Heading>Login</Heading>
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
        <div>
          {
            message && 
              <>
              {
                status ? <p style={{color:'green'}}>{message}</p> : <p style={{color:'red'}}>{message}</p>
              }
              </>
            
          }
        </div>
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
        <label onClick={()=>setter('requestchangepassword')} style={{cursor:'pointer'}}>Forgot Password?</label>
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
          Login
        </button>
        <label>Don't have an account? <span style={{color:'blue',cursor:'pointer',textDecoration:'underline'}} onClick={()=>setter('signup')}>Signup</span></label>
      </form>
    </div>
  );
}

export default Login;
