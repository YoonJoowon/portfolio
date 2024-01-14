import React from "react";
import styled from "styled-components";

const ProjectNextButton = ({ nextTitle, projectName }) => {
  return (
    <Container>
      <ExplainNextPage>
        <NextTitle>{nextTitle}</NextTitle>
        <ProjectName>{projectName}</ProjectName>
      </ExplainNextPage>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const ExplainNextPage = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 40px 40px 0 0;
  background-color: #1b2735;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    height: 130px;
  }
`;

const sharedStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: transform 0.3s, box-shadow 0.3s;
`;

const NextTitle = styled.div`
  ${sharedStyles}
  width: 400px;
  padding: 30px;
  font-size: 1.3rem;
  background: rgba(0, 0, 0, 0.5);
  margin: 20px;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

const ProjectName = styled.div`
  ${sharedStyles}
  width: 70%;
  padding: 30px;
  font-size: 1.1rem;
  line-height: 2;
  text-align: left;
  margin: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 70%;
    font-size: 0.9rem;
    display: none;
  }
`;

export default ProjectNextButton;
