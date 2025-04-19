import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/template/Page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Page></Page>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
