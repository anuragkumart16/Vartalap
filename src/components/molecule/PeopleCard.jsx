import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import Text from '../atom/Text'
import SmallText from '../atom/SmallText'

function PeopleCard() {
  return (
    <div style={{display:'flex',alignItems:'center',marginBottom:'1rem'}}>
      <MdAccountCircle size={'3rem'} style={{marginRight:'0.5rem'}}/>
        <div><Text>Anurag Kumar Tiwari</Text>
        <SmallText>hello ,what's up</SmallText></div>
      </div>
  )
}

export default PeopleCard
