/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home } from "./components/Home";
import Notion from "./components/Notion";
// import { css, palette } from "@mui/system";
import { useEffect } from "react";
import config from "./config.json";

function App() {
  const [launch, setLaunch] = useState(
    window.location.hostname !== "www.sapthrang.com" || config.state
  );
  useEffect(() => {
    const shortcutHandler = (e: KeyboardEvent) => {
      // double click d
      if (e.key === "l" || e.key === "L") {
        e.preventDefault();
        setLaunch((s) => !s);
      }
    };

    window.addEventListener("keydown", shortcutHandler);
    return () => {
      window.removeEventListener("keydown", shortcutHandler);
    };
  }, []);
  return (
    <>
      {launch ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<Notion />} />
            <Route path="/events" element={<Notion />} />
          </Routes>
        </Router>
      ) : (
        <Intro />
      )}
    </>
  );
}

function Intro() {
  return <Header hide />;
}

export default App;
