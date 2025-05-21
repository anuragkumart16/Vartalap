import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { healthCheck } from '../services/healthcheck'
import { verifyAuth } from '../services/user'
function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    healthCheck()
      .then((data) => {
        if (data.success) {
          return data
        } else {
          throw new Error(data.message)
        }
      })
      .then(() => {
        return verifyAuth()
      })
      .then((data) => {
        if (data.success) {
          navigate('/chat')
        } else {
          navigate('/auth')
        }
        return
      })
      .catch((error) => {
        console.log(error,'this error is being executed!')
        navigate('/error',{state:{error:'Server Error!',message:'Unable to connect to server at the moment, We are working on it, please try again later'}})
      })
  }, [navigate])

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="/Logo.svg" />
    </div>
  )
}

export default Splash
