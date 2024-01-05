import React from "react";
import { styled, keyframes } from "styled-components";
import CanvasBackground from "../canvas/canvasBackground";
import ProjectHover from "../canvas/projectHover";

const Project = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasBackground />
      </CanvasTreeContainer>
      <Background>
        <ProjectHover></ProjectHover>
      </Background>
    </>
  );
};

export default Project;

const CanvasTreeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
`;
