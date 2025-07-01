import React from 'react'
import SmallTabNav from '../organism/SmallTabNav'
import SmallTabBody from '../organism/SmallTabBody'
import { VerticalNavContext } from '../../context/VerticalNavContext'
import { useContext } from 'react'
import FriendRequests from './FriendRequests'

function SmallTab() {
  const { tab } = useContext(VerticalNavContext);
  return (
    <div style={{height:'100vh',width:'23vw',backgroundColor:'#ffffff',borderRight:'1px solid #eae7e3',display:'flex',flexDirection:'column'}}>
      {tab != 'friends' && <SmallTabNav/>}
      {tab == 'startscreen' && <SmallTabBody emptyMessage='Start a conversation'/>}
      {tab == 'chat' && <SmallTabBody emptyMessage='Start a conversation'/>}
      {tab == 'friends' && <FriendRequests />}
    </div>
  )
}

export default SmallTab
