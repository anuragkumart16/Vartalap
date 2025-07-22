import React, { useState, useEffect, useContext, useRef } from 'react';
import ChatHolderNav from '../organism/ChatHolderNav';
import Messageholder from '../organism/Messageholder';
import ChatHolderFoot from '../organism/ChatHolderFoot';
import { chatSocket } from '../../utils/socket';
import { getMessagesWithUser } from '../../services/member';
import { ChatContext } from '../../context/ChatContext';
import { AuthContext } from '../../context/AuthContext';

function ChatHolder() {
  const { chatId } = useContext(ChatContext); // recipient user id
  const { userId } = useContext(AuthContext); // current user id
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Join own room on mount
  useEffect(() => {
    if (userId) {
      console.log('[Socket] Emitting join with userId:', userId);
      chatSocket.emit('join', userId);
    }
  }, [userId]);

  // Fetch previous messages when chatId changes
  useEffect(() => {
    // Clear messages immediately when chatId changes
    setMessages([]);
    if (!chatId) return;
    getMessagesWithUser(chatId)
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setMessages(
            data.data.map((msg) => ({
              id: msg._id,
              text: msg.message,
              fromMe: msg.senderId === userId,
              time: new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }))
          );
        } else {
          setMessages([]);
        }
      })
      .catch(() => setMessages([]));
  }, [chatId, userId]);

  // Listen for incoming messages
  useEffect(() => {
    const handler = (msg) => {
      console.log('[Socket] Incoming message:', msg, 'Current chatId:', chatId);
      if (msg && chatId && msg.from === chatId) {
        setMessages((prev) => ([
          ...prev,
          {
            id: Date.now(),
            text: msg.message,
            fromMe: false,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]));
      }
    };
    chatSocket.on('message', handler);
    return () => chatSocket.off('message', handler);
  }, [chatId]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Send message
  const sendMessage = (text) => {
    console.log('[SendMessage] text:', text, 'chatId:', chatId, 'userId:', userId);
    if (!text.trim() || !chatId || !userId) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => ([
      ...prev,
      { id: Date.now(), text, fromMe: true, time }
    ]));
    chatSocket.emit('message', { to: chatId, message: text, from: userId });
  };

  return (
    <div style={{height:'100vh',backgroundColor:'#ececec',flex:'1',display:'flex',flexDirection:'column'}}>
      <ChatHolderNav/>
      <Messageholder messages={messages} messagesEndRef={messagesEndRef}/>
      <ChatHolderFoot onSend={sendMessage}/>
    </div>
  );
}

export default ChatHolder;
