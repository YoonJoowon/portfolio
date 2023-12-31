import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CanvasTree from "./canvas/canvasTree";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <CanvasTree />
    </BrowserRouter>
  );
}

export default App;
