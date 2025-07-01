import { createContext,useState } from "react";

export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
    const [chatId,setChatId]=useState(null)
    const [chatName,setChatName]=useState(null)
    const [chatEmail,setChatEmail]=useState(null)
    const [chatProfilePicture,setChatProfilePicture]=useState(null)

    return (
      <ChatContext.Provider value={{chatId,setChatId,chatName,setChatName,chatEmail,setChatEmail,chatProfilePicture,setChatProfilePicture}}>
        {children}
      </ChatContext.Provider>
    );
};
