import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Land from "./pages/Land";
import Splash from "./pages/Splash";
import Auth from "./pages/Auth";
import AudioCall from "./pages/AudioCall";
import VideoCall from "./pages/VideoCall";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash/>} />
          <Route path='/chat' element={<Land/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/audiocall' element={<AudioCall/>}/>
          <Route path='/videocall' element={<VideoCall/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
