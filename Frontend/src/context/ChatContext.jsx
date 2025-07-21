import { createContext,useEffect,useState } from "react";

export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
    const [chatId,setChatId]=useState(null)
    const [chatName,setChatName]=useState(null)
    const [chatEmail,setChatEmail]=useState(null)
    const [chatProfilePicture,setChatProfilePicture]=useState(null)

    useEffect(()=>{
        console.log(chatId,chatName,chatEmail,chatProfilePicture)
    },[chatId,chatName,chatEmail,chatProfilePicture])


    return (
      <ChatContext.Provider value={{chatId,setChatId,chatName,setChatName,chatEmail,setChatEmail,chatProfilePicture,setChatProfilePicture}}>
        {children}
      </ChatContext.Provider>
    );
};
