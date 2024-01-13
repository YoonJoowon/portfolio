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
`;

const NextTitle = styled.div`
  width: 400px;
  padding: 30px;
  color: white;
  font-size: 1.3rem;
  line-height: 2;
  text-align: left;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin: 20px;
  position: relative;
  cursor: pointer;
`;

const ProjectName = styled.div`
  width: 70%;
  padding: 10px 20px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2;
  text-align: left;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    font-size: 0.9rem;
  }
`;

export default ProjectNextButton;
