import React from 'react'
import Heading from '../atom/Heading'

function StartScreen() {
  return (
    <div style={{height:'100vh',backgroundColor:'#ececec',flex:'1',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <img src="Logo.svg"/>
      <Heading style={{color:'#8c8d8d',fontSize:'2.5rem',marginTop:'1rem'}}>Vartalaap Web</Heading>
    </div>
  )
}

export default StartScreen
