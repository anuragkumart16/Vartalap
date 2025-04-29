import React from 'react'
import TextArea from '../molecule/TextArea'

function ChatHolderFoot() {
  return (
    <div style={{backgroundColor:'#F4F4F4',borderTop:'1px solid #e4ded6',width:'100%',padding:'1rem 2rem',display:'flex'}}>
      <TextArea/>
      <img src='icon/send.svg' style={{height:'1rem'}}/>
    </div>
  )
}

export default ChatHolderFoot
