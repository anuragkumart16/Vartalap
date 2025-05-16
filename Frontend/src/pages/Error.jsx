import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Holderdiv from '../components/atom/Holderdiv'
import Text from '../components/atom/Text';
import Button from '../components/atom/Button';

function Error() {
  const navigate = useNavigate()
  const ErrorTitle = useLocation().state?.error;
  const ErrorMessage = useLocation().state?.message;

  const [title,setTitle] = useState(ErrorTitle)
  const [message,setMessage] = useState(ErrorMessage)
  
  useEffect(() => {
    if (!navigator.onLine){
      setTitle('Network Error')
      setMessage('Please check your internet connection')
    }
  },[])
  return (
    <div style={{height:'100vh',width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Holderdiv>
        <h1>{title ? title : 'Page not found'}</h1>
      <Text>{message ? message : 'Page you are looking for doesn\'t exist'}</Text>
      {!title && <Button onclick={() => navigate('/') }>Go Home</Button>}
      {title && <Button onclick={() => navigate('/') }>Refresh</Button>}
      </Holderdiv>
    </div>
  )
}

export default Error
