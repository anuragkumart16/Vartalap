import React from 'react'

function SmallText({children,style}) {
  return (
    <p style={{fontSize:'0.75rem',color:'#a9a9a9',...style}}>{children}</p>
  )
}

export default SmallText
