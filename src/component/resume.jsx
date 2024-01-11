import React from "react";
import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import resumeImg from "../asset/resume.png";

const Resume = () => {
  return (
    <>
      <ResumeImgBox>
        <Link to="/Project">
          <ResumeImg src={resumeImg}></ResumeImg>
        </Link>
      </ResumeImgBox>
    </>
  );
};

export default Resume;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ResumeImgBox = styled.div`
  width: 550px;

  @media (max-width: 850px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    width: 500px;
  }
`;

const ResumeImg = styled.img`
  width: 100%;
  padding: 7px;
  opacity: 0.1;
  animation: ${fadeIn} 3s ease-in-out forwards;

  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin: 20px;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: auto;
  }

  /* 박스 내부의 요소들에 대한 스타일 */
  &::before,
  &::after {
    content: "";
    position: absolute;
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }

  &::before {
    top: -5px;
    left: -5px;
    border-top: none;
    border-left: none;
  }

  &::after {
    bottom: -5px;
    right: -5px;
    border-bottom: none;
    border-right: none;
  }

  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;
