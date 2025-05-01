import React from 'react'
import TextArea from '../molecule/TextArea'
import { FiPlus } from "react-icons/fi";
import { MdOutlineMic } from "react-icons/md";

function ChatHolderFoot() {
  return (
    <div style={{backgroundColor:'#F4F4F4',borderTop:'1px solid #e4ded6',width:'100%',padding:'1rem 1rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <FiPlus size={'1.3rem'} style={{marginRight:'0.5rem'}}/>
      <TextArea/>
      {/* <img src='icon/send.svg' style={{height:'1.8rem',marginLeft:'0.5rem',cursor:'pointer'}}/> */}
      <MdOutlineMic size={'1.3rem'} style={{marginLeft:'0.5rem',cursor:'pointer'}} />
    </div>
  )
}

export default ChatHolderFoot
