import React from 'react'
import ChatHolderNav from './../organism/ChatHolderNav'
import Messageholder from '../organism/Messageholder'
import ChatHolderFoot from '../organism/ChatHolderFoot'
function ChatHolder() {
  return (
    <div style={{height:'100vh',backgroundColor:'#efe9e0',width:'100%',display:'flex',flexDirection:'column'}}>
      <ChatHolderNav/>
      <Messageholder/>
      <ChatHolderFoot/>
    </div>
  )
}

export default ChatHolder
