import { OverlayContext } from "../context/OverlayContext";
import { useContext } from "react"

const useOverlay = () =>{
    const overlay = useContext(OverlayContext)
    const showOverlay = overlay.showOverlay
    const overlayElements = overlay.overlayElements
    const setOverlayElements = overlay.setOverlayElements
    const setShowOverlay = overlay.setShowOverlay


    return {
        showOverlay,
        overlayElements,
        setOverlayElements,
        setShowOverlay
    }
}

export default useOverlay
