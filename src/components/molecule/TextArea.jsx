import React from 'react'

function TextArea({style}) {
  return (
    <div style={{display:'flex',backgroundColor:'#ffffff',padding:'0.5rem',border:'1px solid #e4ded6',borderRadius:'1.5rem',...style,flex:'1'}}>
        <textarea
        onInput={(e) => {
            e.target.style.height = '1rem'; // reset first
            const scrollHeight = e.target.scrollHeight;
            if (scrollHeight <= 80) { // 5rem = 80px
              e.target.style.height = scrollHeight + 'px';
              e.target.style.overflowY = 'hidden';
            } else {
              e.target.style.height = '8rem';
              e.target.style.overflowY = 'auto';
            }
          }}
         style={{border:'none',backgroundColor:'#ffffff',outline:'none',width:'100%',height:'1rem',maxHeight:'8rem',resize:'none',flex:'1'}}></textarea>
    </div>
  )
}

export default TextArea
