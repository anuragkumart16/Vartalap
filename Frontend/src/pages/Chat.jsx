import React , {useContext}from 'react'
import VerticalNav from '../components/template/VerticalNav'
import SmallTab from '../components/template/SmallTab'
import Resizable from '../components/organism/Resizable'
import ChatHolder from '../components/template/ChatHolder'
import { VerticalNavContext } from '../context/VerticalNavContext'

function Chat() {
  const {tab} = useContext(VerticalNavContext)
  return (
    <section style={{display:'flex'}}>
        <VerticalNav />
        <SmallTab/>
        {tab =='StartScreen' && <ChatHolder/>}
        {tab == 'chat' && <ChatHolder/>}
    </section>
  )
}

export default Chat
