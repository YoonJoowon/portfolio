import React from "react";
import styled from "styled-components";
import AIlolmooncheol from "../asset/ailolmooncheol.png";

const ProjectCard = ({ imageSrc, title, description }) => {
  return (
    <StyledProjectCard>
      <img src={imageSrc} alt="Project" />
      <figcaption>
        <h2>
          If your <span>knees</span> aren't
        </h2>
        <p>{description}</p>
      </figcaption>
    </StyledProjectCard>
  );
};

const ProjectHover = () => {
  const projects = [
    { imageSrc: AIlolmooncheol, description: "Description 1" },
    { imageSrc: AIlolmooncheol, description: "Description 2" },
    { imageSrc: AIlolmooncheol, description: "Description 3" },
    { imageSrc: AIlolmooncheol, description: "Description 4" },
  ];

  return (
    <StyledProjectHover>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </StyledProjectHover>
  );
};

export default ProjectHover;

const StyledProjectHover = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  margin: 10px;
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
  cursor: pointer;

  * {
    box-sizing: border-box;
  }
  
  img {
    opacity: 1;
    width: 100%;
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
