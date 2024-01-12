import React from "react";
import matrip from "../asset/projectFile/matrip.jpg";
import matrip2 from "../asset/projectFile/matrip2.jpg";
import matrip3 from "../asset/projectFile/matrip3.jpg";
import matrip4 from "../asset/projectFile/matrip4.jpg";
import ProjectCommon from "./ProjectCommon";
import styled from "styled-components";

const ProjectMatrip = () => {
  return (
    <>
      <ProjectCommon backgroundImage={matrip} />
      <ProjectCommon backgroundImage={matrip2} />
      <ImgBox>
        <Imgshame src={matrip3}></Imgshame>
        <Img src={matrip4}></Img>
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
            기획자의 의도에 맞춘 레이아웃을 Jira, Figma로 소통하며 개발 진행 순서를
            팀원들과 맞추어 테스크와 시간을 효율적이게 관리했습니다.
          </Text>
        </TextBox>
      </ImgBox>
      <ImgBox></ImgBox>
    </>
  );
};

export default ProjectMatrip;

const ImgBox = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #b7ceff;
  font-family: "Pretendard", sans-serif;
`;

const Img = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 20px;
  object-fit: cover;
  margin-right: 20px;
`;

const Imgshame = styled.img`
  width: 40%;
  height: 50%;
  border-radius: 20px;
  object-fit: cover;
  margin-right: 20px;
`;

const TextBox = styled.div``;

const Title = styled.div`
  width: 400px;
  padding: 10px 20px 10px 20px;
  color: #000000;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2;
  text-align: left;
  background: white;
  border-radius: 10px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const Text = styled.div`
  width: 500px;
  padding: 10px 20px 10px 20px;
  color: #4e4e4e;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2;
  text-align: left;
  background: white;
  border-radius: 10px;
  margin-left: 30px;
`;
