import React from "react";
import { styled, keyframes } from "styled-components";
import CanvasBackground from "../canvas/canvasBackground";
import cus from "../asset/projectFile/cus.jpg";

const ProjectCus = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasBackground />
      </CanvasTreeContainer>
      <Background>
        <Img src={cus}></Img>
      </Background>
    </>
  );
};

export default ProjectCus;

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
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
