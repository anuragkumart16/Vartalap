import React from 'react'
import SmallTabNav from '../organism/SmallTabNav'
import SmallTabBody from '../organism/SmallTabBody'

function SmallTab() {
  return (
    <div style={{height:'100vh',width:'23vw',backgroundColor:'#ffffff',borderRight:'1px solid #eae7e3',display:'flex',flexDirection:'column'}}>
      <SmallTabNav/>
      <SmallTabBody emptyMessage='Start a conversation'/>
    </div>
  )
}

export default SmallTab
