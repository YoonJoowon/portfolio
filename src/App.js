import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Nav from "./component/nav";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Star from "./component/start";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={< Project/>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Star />
    </BrowserRouter>
  );
}

export default App;
