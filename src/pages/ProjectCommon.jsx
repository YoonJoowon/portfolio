import React from "react";
import { styled } from "styled-components";
import CanvasBackground from "../canvas/canvasBackground";

const ProjectCommon = ({ children, backgroundImage }) => {
  return (
    <>
      <Background>
        <Img src={backgroundImage} />
        {children}
      </Background>
    </>
  );
};

export default ProjectCommon;

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
  height: 80%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
