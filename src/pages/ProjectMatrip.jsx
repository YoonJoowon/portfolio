import React, { useEffect } from "react";
import matrip from "../asset/projectFile/matrip.jpg";
import matrip2 from "../asset/projectFile/matrip2.jpg";
import matrip3 from "../asset/projectFile/matrip3.jpg";
import matrip4 from "../asset/projectFile/matrip4.jpg";
import ProjectNextBtn from "../component/projectNextBtn";
import ProjectCommon from "./ProjectCommon";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectMatrip = () => {
  const projectId = 1;
  const projectPath = `/Project/${projectId + 1}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectCommon backgroundImage={matrip} />
      <ProjectCommon backgroundImage={matrip2} />
      <ExplainBox>
        <ImgBox>
          <Imgshame src={matrip3}></Imgshame>
          {/* <Img src={matrip4}></Img> */}
        </ImgBox>
        <TextBox>
          <Title>◦ Jira & Figma 를 통해 협업</Title>
          <Text>
            다양한 직군과 협업을 위해 Jira를 도입했습니다. <br />
            Jira의 직관적인 UI로 보다 원할하게 소통하여 7명의 팀원들과
            프로젝트를 일정에 맞추어 진행했습니다.
          </Text>
          <Text>
            디자이너의 일정을 기다리기엔 개발하기까지 소요되는 시간의 관리가
            비효율적이었습니다.
            <br />
            기획자의 의도에 맞춘 레이아웃을 Jira, Figma로 소통하며 개발 진행
            순서를 팀원들과 맞추어 테스크와 시간을 효율적이게 관리했습니다.
          </Text>
        </TextBox>
      </ExplainBox>
      <Link to={projectPath}>
        <ProjectNextBtn nextTitle="----- Next Project" projectName="4CUS" />
      </Link>
    </>
  );
};

export default ProjectMatrip;

const ExplainBox = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #1b2735;;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
`;

const Imgshame = styled.img`
  width: 80%;
  height: auto;
  margin: auto;
  object-fit: cover;
`;

const Img = styled.img`
  width: 20%;
  height: auto;
  object-fit: cover;
`;

const TextBox = styled.div`
  width: 80%;
  margin: auto;
`;

const Title = styled.div`
  width: 70%;
  padding: 10px 20px 10px 20px;
  color: #000000;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 2;
  text-align: left;
  background: white;
  border-radius: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.1rem;
    padding: 0px;
  }
`;

const Text = styled.div`
  width: 70%;
  padding: 10px 20px 10px 20px;
  color: #4e4e4e;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2;
  text-align: left;
  background: white;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
    font-size: 0.9rem;
  }
`;
