import React from 'react'

function Text({children,style}) {
  return (
    <p style={{fontSize:'0.85rem',color:'black',fontWeight:'450',...style}}>{children}</p>
  )
}

export default Text
