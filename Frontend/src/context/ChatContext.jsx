import { createContext,useState } from "react";

export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
    const [chatId,setChatId]=useState(null)
    const [chatName,setChatName]=useState(null)

  
    return (
      <ChatContext.Provider value={{chatId,setChatId,setChatName,chatName}}>
        {children}
      </ChatContext.Provider>
    );
  };
