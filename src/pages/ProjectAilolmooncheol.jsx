import React from "react";
import { styled, keyframes } from "styled-components";
import startPage from "../asset/projectFile/startPage.jpg";
import lolmoonceol from "../asset/projectFile/lolmoonceol.jpg";
import lolmoonceol2 from "../asset/projectFile/lolmooncheol2.jpg";
import CanvasBackground from "../canvas/canvasBackground";

const ProjectAilolmooncheol = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasBackground />
      </CanvasTreeContainer>
      <Background>
        <Img src={lolmoonceol}></Img>
        <Img src={lolmoonceol2}></Img> 
      </Background>
    </>
  );
};

export default ProjectAilolmooncheol;

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
  position: absolute;
`;

const Img = styled.img`
  width: 1400px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-left: 100px;
  border-bottom: 1px solid black
`;
