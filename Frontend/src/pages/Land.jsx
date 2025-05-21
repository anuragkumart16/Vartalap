import React , {useContext}from 'react'
import VerticalNav from '../components/template/VerticalNav'
import SmallTab from '../components/template/SmallTab'
import ChatHolder from '../components/template/ChatHolder'
import { VerticalNavContext } from '../context/VerticalNavContext'
import Friends from '../components/template/Friends'
import StartScreen from '../components/template/StartScreen'
import AI from '../components/template/AI'

function Land() {
  const {tab} = useContext(VerticalNavContext)
  return (
    <section style={{display:'flex'}}>
        <VerticalNav />
        <SmallTab/>
        {tab =='startscreen' && <StartScreen/>}
        {tab == 'chat' && <ChatHolder/>}
        {tab == 'friends' && <Friends/> }
        {tab == 'ai' && <AI/>}
    </section>
  )
}

export default Land
