import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Chat from "./pages/Chat";
import Splash from "./pages/Splash";
import Auth from "./pages/Auth";
import AudioCall from "./pages/AudioCall";
import VideoCall from "./pages/VideoCall";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash/>} />
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/audiocall' element={<AudioCall/>}/>
          <Route path='/videocall' element={<VideoCall/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
