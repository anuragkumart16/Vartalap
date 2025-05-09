import React from 'react'

function Heading({children,style}) {
  return (
    <h1 style={{fontSize:'2rem',color:'black',fontWeight:'400',fontFamily:'Helvetica Neue',...style}}>{children}</h1>
  )
}

export default Heading
