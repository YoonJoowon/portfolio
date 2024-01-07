import React from "react";
import { styled, keyframes } from "styled-components";
import CanvasBackground from "../canvas/canvasBackground";
import ProjectHover from "../canvas/projectHover";
import matrip from "../asset/projectFile/matrip.jpg";
import matrip2 from "../asset/projectFile/matrip2.jpg";

const ProjectMatrip = () => {
  return (
    <>
      <Background>
        <Img src={matrip}></Img>
        <Img src={matrip2}></Img>
        {/* 책장 넘어가는 효과? */}
      </Background>
    </>
  );
};

export default ProjectMatrip;

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
