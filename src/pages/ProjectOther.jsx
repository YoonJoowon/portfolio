import React from "react";
import { styled, keyframes } from "styled-components";
import CanvasBackground from "../canvas/canvasBackground";
import other from "../asset/projectFile/other.jpg";

const ProjectOther = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasBackground />
      </CanvasTreeContainer>
      <Background>
        <Img src={other}></Img>
      </Background>
    </>
  );
};

export default ProjectOther;

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
  border-bottom: 1px solid black;
`;
