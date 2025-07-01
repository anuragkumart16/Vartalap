import { createContext, useState } from "react";

export const OverlayContext = createContext()

export const OverlayContextProvider = ({ children }) => {
    const [showOverlay, setShowOverlay] = useState(true)
    const [overlayElements, setOverlayElements] = useState(null)
    return (
        <OverlayContext.Provider value={{ showOverlay, setShowOverlay, overlayElements, setOverlayElements }}>
            {children}
        </OverlayContext.Provider>
    )
}