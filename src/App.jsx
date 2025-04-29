import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/template/Page";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Page></Page>} />
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
