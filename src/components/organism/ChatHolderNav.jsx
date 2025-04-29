import React from 'react'
import SmallText from '../atom/SmallText'
import Text from '../atom/Text'

function ChatHolderNav() {
  return (
    <div style={{backgroundColor:'#F4F4F4',height:'3rem',borderBottom:'1px solid #e4ded6',width:'100%',padding:'0.5rem 2rem'}}>
      <Text>Anurag Kumar Tiwari</Text>
      <SmallText>Last seen 2 hours ago</SmallText>
    </div>
  )
}

export default ChatHolderNav
