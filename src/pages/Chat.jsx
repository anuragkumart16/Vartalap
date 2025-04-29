import React from 'react'
import VerticalNav from '../components/template/VerticalNav'
import SmallTab from '../components/template/SmallTab'
import Resizable from '../components/organism/Resizable'
import ChatHolder from '../components/template/ChatHolder'

function Chat() {
  return (
    <section style={{display:'flex'}}>
        <VerticalNav/>
        <SmallTab/>
       <ChatHolder/>
    </section>
  )
}

export default Chat
