import React, { useState } from 'react'
import Login from '../components/organism/Login'
import Signup from '../components/organism/Signup'
import ChangePassword from '../components/organism/ChangePassword'


function Auth() {
  const [state,setState] = useState('login')
  return (
    <div>
      {state=='login' &&<Login setter={setState}/>}
      {state=='signup' && <Signup setter={setState}/>}
      {state=='changepassword' && <ChangePassword setter={setState}/>}
    </div>
  )
}

export default Auth
