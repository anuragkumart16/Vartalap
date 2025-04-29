import React from 'react'
import SearchBar from '../molecule/SearchBar'

function SmallTabNav() {
  return (
    <div style={{height:'6rem',width:'100%',padding:'0.2rem 0.5rem'}} >
      <div style={{display:'flex',justifyContent:'space-between',padding:'0.8rem 0.5rem'}}>
        <p style={{fontWeight:'500',fontSize:'1rem'}}>Chats</p>
      </div>
      <SearchBar/>
    </div>
  )
}

export default SmallTabNav
