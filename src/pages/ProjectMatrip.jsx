import React from "react";
import { styled, keyframes } from "styled-components";
import CanvasBackground from "../canvas/canvasBackground";
import matrip from "../asset/projectFile/matrip.jpg";
import matrip2 from "../asset/projectFile/matrip2.jpg";

const ProjectMatrip = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasBackground />
      </CanvasTreeContainer>
      <Background>
        <Img src={matrip}></Img>
        <Img src={matrip2}></Img>
      </Background>
    </>
  );
};

export default ProjectMatrip;

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
