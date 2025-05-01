import React from 'react'
import SmallText from '../atom/SmallText'
import Text from '../atom/Text'
import { MdAccountCircle } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { PiMusicNoteFill } from "react-icons/pi";

function ChatHolderNav() {
  return (
    <>
      <div style={{ backgroundColor: '#F4F4F4', height: '3rem', borderBottom: '1px solid #e4ded6', width: '100%', padding: '0.5rem 1rem' ,display:'flex',alignItems:'center'}}>
      <div style={{display:'flex',alignItems:'center'}}>
      <MdAccountCircle size={'2.3rem'} style={{marginRight:'0.5rem'}}/>
        <div><Text>Anurag Kumar Tiwari</Text>
        <SmallText>Last seen 2 hours ago</SmallText></div>
      </div>
      <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'1rem'}}>
      <PiMusicNoteFill size={'1.3rem'}/>
      <IoVideocam size={'1.3rem'}/>
      <IoMdCall size={'1.3rem'} />
      <IoSearchSharp size={'1.3rem'}/>
      </div>
      </div>
    </>
  )
}

export default ChatHolderNav
