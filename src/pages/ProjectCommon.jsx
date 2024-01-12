import React from "react";
import { styled } from "styled-components";

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
