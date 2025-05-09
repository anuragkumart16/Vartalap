import React,{ useState } from 'react'
import Heading from '../atom/Heading'


function ChangePassword({setter}) {
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
      <Heading>Change Password</Heading>
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
          <label>New password</label>
          <input
            type={showPassowrd ? "text" : "password"}
            placeholder="New Password"
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
          <label>Confirm password</label>
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
          onClick={()=>setter('login')}
        >
          Update
        </button>

      </form>
    </div>
    
  )
}

export default ChangePassword
