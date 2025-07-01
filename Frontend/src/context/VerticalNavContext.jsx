import { createContext,useState } from "react";

export const VerticalNavContext = createContext();
export function VerticalNavContextProvider({ children }) {
    const [tab,setTab]=useState('startscreen')
    return (
        <VerticalNavContext.Provider value={{tab,setTab}}>
            {children}
        </VerticalNavContext.Provider>
    );
}