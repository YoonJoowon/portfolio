import React from "react";
import cus from "../asset/projectFile/cus.jpg";
import cus2 from "../asset/projectFile/cus2.jpg";
import cus3 from "../asset/projectFile/cus3.jpg";
import cus4 from "../asset/projectFile/cus4.jpg";
import ProjectCommon from "./ProjectCommon";
import styled from "styled-components";

const ProjectCus = () => {
  return (
    <>
      <ProjectCommon backgroundImage={cus} />
      <ExplainBox>
        <ImgBox>
          <Imgshame src={cus2}></Imgshame>
        </ImgBox>
        <TextBox>
          <Title>◦ Google 스프린트 프로젝트</Title>
          <Text>
            해당 서비스를 왜 써야하는지 <br />
            해당 서비스에서는 무엇을 이용하게 되는지 <br />
            해당 서비스를 어떻게 개발 할 것 인지 <br />
            해당 서비스를 개발하게 되면 얻는 것이 무엇인지 <br />
            해당 서비스가 다른 서비스와의 차별점이 있는지 <br />
          </Text>
          <Text>위와 같은 질문의 포커스를 맞추어 팀원들과 토론하였습니다.</Text>
        </TextBox>
      </ExplainBox>
      <ExplainBox>
        <ImgBox>
          <Imgshame src={cus3}></Imgshame>
        </ImgBox>
        <TextBox>
          <Title>◦ Google 스프린트 프로젝트</Title>
          <Text>
            비대면으로 진행하는 프로젝트에 맞춰 Discord, Notion, Git, Figma 등의
            소통 툴을 적극 활용하였습니다.
          </Text>
          <Text>
            특히 피그잼을 통해 비대면 상황에서의 소통의 중요성을 팀원들과 함께
            상기했습니다.
          </Text>
          <Text>
            규칙, 팀의 목표, 개인의 목표, 가치, 활동, 위험성 등 소통을 진행했으며
            팀원들의 니즈와 협동 및 프로젝트의 방향성에 대해 얘기했습니다.
          </Text>
        </TextBox>
      </ExplainBox>
      <ExplainBox></ExplainBox>
    </>
  );
};

export default ProjectCus;

const ExplainBox = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #b7ceff;
  font-family: "Pretendard", sans-serif;
  /* flex-direction: column; */

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ImgBox = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

const Img = styled.img`
  width: 40%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 40px;
  }
`;

const Imgshame = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 5px;
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
