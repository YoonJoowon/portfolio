import React from "react";
import styled, { keyframes } from "styled-components";
import AIlolmooncheol from "../asset/ailolmooncheol.png";
import cus from "../asset/4cus.png";
import metabus from "../asset/metabus.jpg";
import matrip from "../asset/matrip.png";

const ProjectCard = ({ imageSrc, title, description }) => {
  return (
    <StyledProjectCard>
      <img src={imageSrc} alt="Project" />
      <figcaption>
        <h2>
          <span>{title}</span>
        </h2>
        <p>{description}</p>
      </figcaption>
    </StyledProjectCard>
  );
};

const ProjectHover = () => {
  const projects = [
    {
      imageSrc: AIlolmooncheol,
      title: "AI 롤문철",
      description:
        "리그오브레전드 게임 분쟁 상황에서의 과실을 판단해주는 AI 웹서비스",
      detail: "Description 1",
    },
    {
      imageSrc: matrip,
      title: "메이트립",
      description: "여행을 함께 즐길 수 있는 친구 만들기 서비스",
      detail: "Description 1",
    },
    {
      imageSrc: cus,
      title: "4CUS",
      description:
        "인생네컷 사진을 꾸미고 앨범을 만들어 저장할 수 있도록 도와주는 서비스",
      detail: "Description 1",
    },
    {
      imageSrc: metabus,
      title: "그 외 활동",
      description:
        "Three.js 를 활용한 메타버스 미니 프로젝트 및 NEORDINARY 행사 발표",
      detail: "Description 1",
    },
  ];

  return (
    <>
      <StyledProjectHover>
        <ProjectPageTitle>Project</ProjectPageTitle>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </StyledProjectHover>
    </>
  );
};

export default ProjectHover;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectPageTitle = styled.div`
  color: #ffffff;
  position: absolute;
  top: -15%;
  width: 400px;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const StyledProjectHover = styled.div`
  animation: ${fadeIn} 3s ease-in-out forwards;
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  top: 20%;
  left: 10%;
  justify-content: space-around;
  position: absolute;
`;

const StyledProjectCard = styled.figure`
  color: #fff;
  position: relative;
  overflow: hidden;
  min-width: 220px;
  max-width: 400px;
  max-height: 230px;
  width: 100%;
  background: #000000;
  text-align: center;
  display: flex;
  margin-top: 50px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  * {
    box-sizing: border-box;
  }

  img {
    height: auto;
    opacity: 1;
    min-width: 110%;
    max-width: 110%;
    transition: opacity 0.35s;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 3em;
    width: 100%;
    height: 100%;

    &::before {
      position: absolute;
      top: 50%;
      right: 30px;
      bottom: 50%;
      left: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
      content: "";
      opacity: 0;
      background-color: #ffffff;
      transition: all 0.4s;
      transition-delay: 0.6s;
    }

    h2,
    p {
      margin: 0 0 5px;
      opacity: 0;
      transition: opacity 0.35s, transform 0.35s;
    }

    h2 {
      word-spacing: -0.15em;
      font-weight: 300;
      text-transform: uppercase;
      transform: translate3d(0%, 50%, 0);
      transition-delay: 0.3s;

      span {
        font-weight: 800;
      }
    }

    p {
      font-weight: 400;
      transition-delay: 0s;
      margin-top: 20px;
      line-height: 1.4;
    }
  }

  &:hover img {
    opacity: 0.2;
  }

  &:hover figcaption h2 {
    opacity: 1;
    transform: translate3d(0%, 0%, 0);
    transition-delay: 0.3s;
  }

  &:hover figcaption p {
    opacity: 0.9;
    transition-delay: 0.6s;
  }

  &:hover figcaption::before {
    background: rgba(255, 255, 255, 0);
    top: 30px;
    bottom: 30px;
    opacity: 1;
    transition-delay: 0s;
  }
`;
