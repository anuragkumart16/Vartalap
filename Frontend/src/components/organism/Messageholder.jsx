import React from 'react'

function Messageholder({style, messages = [], messagesEndRef}) {
  return (
    <div style={{...style, flex:1, backgroundColor:'#fcf5eb', padding:'1.5rem 0.5rem', overflowY:'auto', display:'flex', flexDirection:'column', gap:'0.5rem'}}>
      {messages.map(msg => (
        <div
          key={msg.id}
          style={{
            alignSelf: msg.fromMe ? 'flex-end' : 'flex-start',
            background: msg.fromMe ? '#1EB254' : '#fff',
            color: msg.fromMe ? 'white' : 'black',
            borderRadius: msg.fromMe ? '1.2rem 1.2rem 0.2rem 1.2rem' : '1.2rem 1.2rem 1.2rem 0.2rem',
            padding: '0.7rem 1.2rem',
            maxWidth: '70%',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
            fontFamily: 'Helvetica Neue',
            fontSize: '1rem',
            marginBottom: '0.2rem',
            marginTop: '0.2rem',
            wordBreak: 'break-word',
          }}
        >
          {msg.text}
          <span style={{
            display:'block',
            fontSize:'0.7rem',
            color: msg.fromMe ? 'white' : '#a9a9a9',
            marginTop:'0.3rem',
            textAlign: msg.fromMe ? 'right' : 'left'
          }}>{msg.time}</span>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default Messageholder
