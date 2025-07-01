import React, { useState } from 'react'
import ChatHolderNav from '../organism/ChatHolderNav'
import Messageholder from '../organism/Messageholder'
import ChatHolderFoot from '../organism/ChatHolderFoot'

const initialMessages = [
  { id: 1, text: 'Hey! How are you?', fromMe: false, time: '09:00' },
  { id: 2, text: 'I am good, how about you?', fromMe: true, time: '09:01' },
  { id: 3, text: 'Doing well! Working on the chat app.', fromMe: false, time: '09:02' },
  { id: 4, text: 'That sounds awesome!', fromMe: true, time: '09:03' },
  { id: 5, text: 'Let me know if you need any help.', fromMe: false, time: '09:04' },
  { id: 6, text: 'Sure, will do. Thanks!', fromMe: true, time: '09:05' },
];

function ChatHolder() {
  const [messages, setMessages] = useState(initialMessages);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => ([
      ...prev,
      { id: prev.length + 1, text, fromMe: true, time }
    ]));
  };

  return (
    <div style={{height:'100vh',backgroundColor:'#ececec',flex:'1',display:'flex',flexDirection:'column'}}>
      <ChatHolderNav/>
      <Messageholder messages={messages}/>
      <ChatHolderFoot onSend={sendMessage}/>
    </div>
  )
}

export default ChatHolder
