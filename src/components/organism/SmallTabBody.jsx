import React from 'react'
import PeopleCard from '../molecule/PeopleCard'

function SmallTabBody() {
  return (
    <div style={{display:'flex',flexDirection:'column',flex:1,padding:'0rem 1rem'}}>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
    </div>
  )
}

export default SmallTabBody
