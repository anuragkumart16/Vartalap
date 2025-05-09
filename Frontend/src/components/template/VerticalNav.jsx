import React,{useContext} from 'react'
import { BiSolidPhoneIncoming } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { VerticalNavContext } from '../../context/VerticalNavContext';
function VerticalNav() {
  const {tab,setTab} = useContext(VerticalNavContext)
  const color = 'grey'
  return (
    <div style={{height:'100vh',width:'4rem',backgroundColor:'#f4f4f4',borderRight:'1px solid #eae7e3',display:'flex',alignItems:'center',flexDirection:'column',padding:'3rem 0rem',gap:'1.5rem'}}>
      {
        tab === 'chat' || tab === 'StartScreen' ?
        <IoChatbubblesSharp size={'1.5rem'} style={{color:'black',cursor:'pointer'}}/> :
        <IoChatbubblesSharp size={'1.5rem'} style={{color:color,cursor:'pointer'}} onClick={()=>setTab('chat')}/>
      }
      {
        tab === 'calls' ?
        <BiSolidPhoneIncoming size={'1.5rem'} style={{color:'black',cursor:'pointer'}}/> :
        <BiSolidPhoneIncoming size={'1.5rem'} style={{color:color,cursor:'pointer'}} onClick={()=>setTab('calls')}/>
      }
      {
        tab === 'friends' ?
        <IoPeople size={'1.5rem'} style={{color:'black',cursor:'pointer'}}/> :
        <IoPeople size={'1.5rem'} style={{color:color,cursor:'pointer'}} onClick={()=>setTab('friends')}/>
      }
      <hr style={{width:'80%'}}/>
     {
        tab === 'archive' ?
        <FaBoxArchive size={'1.2rem'} style={{color:'black',cursor:'pointer'}}/> :
        <FaBoxArchive size={'1.2rem'} style={{color:color,cursor:'pointer'}} onClick={()=>setTab('archive')}/>
     }
      {
        tab === 'starred' ?
        <IoIosStar size={'1.5rem'} style={{color:'black',cursor:'pointer'}}/> :
        <IoIosStar size={'1.5rem'} style={{color:color,cursor:'pointer'}} onClick={()=>setTab('starred')}/>
      }
      <hr style={{width:'80%'}}/>
      {
        tab === 'ai' ?
        <RiRobot2Fill size={'1.5rem'} style={{color:'black',cursor:'pointer'}}/> :
        <RiRobot2Fill size={'1.5rem'} style={{color:color,cursor:'pointer'}} onClick={()=>setTab('ai')}/>
      }

      {
        tab === 'settings' ?
        <RiSettings3Fill size={'1.5rem'} style={{color:'black',cursor:'pointer',marginTop:'auto'}}/> :
        <RiSettings3Fill size={'1.5rem'} style={{color:color,cursor:'pointer',marginTop:'auto'}} onClick={()=>setTab('settings')}/>
      }
    </div>
  )
}

export default VerticalNav
