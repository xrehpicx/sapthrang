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
        <Route path="/page/:id" element={<Notion />} />
        <Route path="/pages" element={<Notion />} />
      </Routes>
    </Router>
  );
}

export default App;
