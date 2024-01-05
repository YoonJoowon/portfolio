import React from "react";
import styled, { keyframes } from "styled-components";
import AIlolmooncheol from "../asset/ailolmooncheol.png";

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
        "리그오브레전드 게임 분쟁 상황에서의 과실을 판단해주고 플레이 피드백을 내려주는 AI 웹서비스",
      detail: "Description 1",
    },
    {
      imageSrc: AIlolmooncheol,
      title: "메이트립",
      description: "여행을 함께 즐길 수 있는 친구 만들기 서비스",
      detail: "Description 1",
    },
    {
      imageSrc: AIlolmooncheol,
      title: "4CUS",
      description:
        "인생네컷 사진을 꾸미고 앨범을 만들어 저장할 수 있도록 도아주는 서비스",
      detail: "Description 1",
    },
    {
      imageSrc: AIlolmooncheol,
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
  color: white;
  position: absolute;
  top: -15%;
  
  font-size: 2rem;
  z-index: 1;
`;

const StyledProjectHover = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  top: 20%;
  left: 10%;
  gap: 10px;
  justify-content: space-around;
  position: absolute;
`;

const StyledProjectCard = styled.figure`
  animation: ${fadeIn} 3s ease-in-out forwards;
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
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  cursor: pointer;

  * {
    box-sizing: border-box;
  }

  img {
    opacity: 1;
    max-width: 100%;
    height: auto;
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
      font-weight: 200;
      transition-delay: 0s;
    }

    a {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      position: absolute;
      color: #ffffff;
    }
  }

  &:hover img {
    opacity: 0.35;
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
