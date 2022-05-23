/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Notion from "./components/Notion";
// import { css, palette } from "@mui/system";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<Notion />} />
        <Route path="/events" element={<Notion />} />
      </Routes>
    </Router>
  );
}

export default App;
