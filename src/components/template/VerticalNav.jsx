import React from 'react'
import { BiSolidPhoneIncoming } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";
function VerticalNav() {
  const color = 'grey'
  return (
    <div style={{height:'100vh',width:'4rem',backgroundColor:'#f4f4f4',borderRight:'1px solid #eae7e3',display:'flex',alignItems:'center',flexDirection:'column',padding:'3rem 0rem',gap:'1.3rem'}}>
      <IoChatbubblesSharp size={'1.5rem'} />
      <BiSolidPhoneIncoming size={'1.5rem'} style={{color:color}}/>
      <hr style={{width:'80%'}}/>
      <FaBoxArchive size={'1.2rem'} style={{color:color}}/>
      <IoIosStar size={'1.5rem'} style={{color:color}}/>
      <hr style={{width:'80%'}}/>
      <RiRobot2Fill size={'1.5rem'} style={{color:color}}/>
      <RiSettings3Fill size={'1.5rem'} style={{color:color,marginTop:'auto'}}/>
    </div>
  )
}

export default VerticalNav
