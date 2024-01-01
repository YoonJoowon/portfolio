import React from "react";
import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import resumeImg from "../asset/resume.png";

const Resume = () => {
  return (
    <>
      <ResumeImgBox>
        <ResumeImg src={resumeImg}></ResumeImg>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ResumeImg = styled.img`
  width: 60%;
  padding: 7px;
  color: white;
  opacity: 0.1;
  animation: ${fadeIn} 3s ease-in-out forwards;

  font-size: 1.6rem;
  line-height: 2;
  text-align: left;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin: 20px;
  position: relative;
  cursor: pointer;

  /* 박스 내부의 요소들에 대한 스타일 */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
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
