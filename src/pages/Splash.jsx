import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Splash() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/auth')
    },3000)
  },[navigate])
  return (
    <div style={{height:'100vh',width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <img src="/Logo.svg" />
    </div>
  )
}

export default Splash
