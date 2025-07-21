import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { healthCheck } from '../services/healthcheck'
import { verifyAuth } from '../services/user'
import { AuthContext } from '../context/AuthContext'
function Splash() {
  const navigate = useNavigate()
  const { setUserId } = useContext(AuthContext);

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
          setUserId(data.data._id); // Set userId in context
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
  }, [navigate, setUserId])

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="/Logo.svg" />
    </div>
  )
}

export default Splash
