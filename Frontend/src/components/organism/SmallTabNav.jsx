import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../molecule/SearchBar'
import { MdMarkChatUnread } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
import { VerticalNavContext } from '../../context/VerticalNavContext';
function SmallTabNav() {
  const {tab} = useContext(VerticalNavContext)
  const [tabName,setTabName] = useState('Chat')
  useEffect(()=>{
    if(tab == 'chat'){
      setTabName('Chat')
    }else if(tab == 'friends'){
      setTabName('Friends')
    }else if(tab == 'calls'){
      setTabName('Call Logs')
    }else if(tab == 'archive'){
      setTabName('Archive')
    }else if(tab == 'starred'){
      setTabName('Starred')
    }else if(tab == 'ai'){
      setTabName('Chat')
    }else{
      setTabName('Settings')
    }
  },[tab])
  return (
    <div style={{height:'6rem',width:'100%',padding:'0.2rem 0.5rem'}} >
      <div style={{display:'flex',justifyContent:'space-between',padding:'0.8rem 0.5rem',alignItems:'center'}}>
        <p style={{fontWeight:'500',fontSize:'1rem'}}>{tabName}</p>
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
        <BsPlusCircleFill size={'1.1rem'}/>
        <MdMarkChatUnread size={'1.2rem'}/>
        </div>

      </div>
      <SearchBar/>
    </div>
  )
}

export default SmallTabNav
