import React, { useState } from 'react'
import Login from './../components/auth-components/Login'
import Signup from './../components/auth-components/Signup'
import ChangePassword from './../components/auth-components/ChangePassword'
import RequestPasswordChange from './../components/auth-components/RequestPasswordChange'
import OTP from '../components/auth-components/OTP'


function Auth() {
  const [state,setState] = useState('login')
  return (
    <div>
      {state=='login' &&<Login setter={setState}/>}
      {state=='signup' && <Signup setter={setState}/>}
      {state=='changepassword' && <ChangePassword setter={setState}/>}
      {state=='requestchangepassword' && <RequestPasswordChange setter={setState}/>}
      {state=='otp' && <OTP setter={setState}/>}
    </div>
  )
}

export default Auth
