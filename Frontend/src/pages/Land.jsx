import AI from "../components/template/AI";
import React, { useContext } from "react";
import Friends from "../components/template/Friends";
import SmallTab from "../components/template/SmallTab";
import StartScreen from "../components/template/StartScreen";
import ChatHolder from "../components/template/ChatHolder";
import useOverlay from "../hooks/useOverlay";
import VerticalNav from "../components/template/VerticalNav";
import { VerticalNavContext } from "../context/VerticalNavContext";

function Land() {
  const { showOverlay, overlayElements, setOverlayElements, setShowOverlay } =
    useOverlay();

  const { tab } = useContext(VerticalNavContext);

  function handleOverlayClick() {
    setShowOverlay(false);
    setOverlayElements(null);
    return;
  }
  return (
    <>
      <section style={{ display: "flex" }}>
        <VerticalNav />
        <SmallTab />
        {tab == "startscreen" && <StartScreen />}
        {tab == "chat" && <ChatHolder />}
        {tab == "friends" && <Friends />}
        {tab == "ai" && <AI />}
      </section>
      
      {showOverlay && (
        <section
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={(e) => e.target === e.currentTarget && handleOverlayClick()}
        >
          <div style={{ opacity: 1 }}>
            {overlayElements}
          </div>
        </section>
      )}
    </>
  );
}

export default Land;
