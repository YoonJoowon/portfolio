import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Nav from "./component/nav";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Star from "./component/star";
import ProjectAilolmooncheol from "./pages/ProjectCus";
import ProjectCus from "./pages/ProjectCus";
import ProjectOther from "./pages/ProjectOther";
import ProjectMatrip from "./pages/ProjectMatrip";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Project/0" element={<ProjectAilolmooncheol />} />
        <Route path="/Project/1" element={<ProjectMatrip />} />
        <Route path="/Project/2" element={<ProjectCus />} />
        <Route path="/Project/3" element={<ProjectOther />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Star />
    </BrowserRouter>
  );
}

export default App;
