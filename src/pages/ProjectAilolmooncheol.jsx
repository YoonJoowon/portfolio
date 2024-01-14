import React, { useEffect } from "react";
import ProjectCommon from "./ProjectCommon";
import styled from "styled-components";
import ProjectNextBtn from "../component/projectNextBtn";
import lolmooncheol from "../asset/projectFile/lolmooncheol.jpg";
import lolmooncheol2 from "../asset/projectFile/lolmooncheol2.jpg";
import lolmooncheol4 from "../asset/projectFile/lolmooncheol4.jpg";
import lolmooncheol5 from "../asset/projectFile/lolmooncheol5.jpg";
import lolmooncheol6 from "../asset/projectFile/lolmooncheol6.jpg";
import lolmooncheol7 from "../asset/projectFile/lolmooncheol7.jpg";
import lolmooncheol8 from "../asset/projectFile/lolmooncheol8.jpg";
import lolmooncheol9 from "../asset/projectFile/lolmooncheol9.jpg";
import lolmooncheol10 from "../asset/projectFile/lolmooncheol10.jpg";
import lolmooncheol11 from "../asset/projectFile/lolmooncheol11.jpg";
import { Link } from "react-router-dom";

const ProjectAilolmooncheol = () => {
  const projectId = 0;
  const projectPath = `/Project/${projectId + 1}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectCommon backgroundImage={lolmooncheol} />
      <ProjectCommon backgroundImage={lolmooncheol2} />

      <ExplainBox>
        <ImgBox>
          <Img src={lolmooncheol4} />
          <Img src={lolmooncheol5} />
        </ImgBox>
        <TextBox>
          <Title>◦ 린스타트업 방식의 개발 & 분쟁 상황 과실 판단 순서</Title>
          <Text>
            1. 소환사 닉네임을 기입
            <br />
            2. 시간과 위치 그리고 분쟁 내용을 입력
          </Text>
          <Text>
            inflow 지표 확인 결과 판결을 받기 전까지 churn의 수치가 45%로
            높았습니다. 채팅형 AI를 통해 이탈률울 20% 까지 낮추었습니다.
          </Text>
          <Text>
            자세한 정보를 받기 위해 하단 부분의 에너지바 인터렉션을 구현하여
            사용자 UX를 개선했습니다. 순차적으로 들어오는 text들은 Recoil을 통해
            전역으로 관리했습니다.
          </Text>
        </TextBox>
      </ExplainBox>

      <ExplainBox>
        <ImgBox>
          <Img src={lolmooncheol6} />
          <Img src={lolmooncheol7} />
        </ImgBox>
        <TextBox>
          <Title>◦ 린스타트업 방식의 개발</Title>
          <Text>
            판결 내용 입력 후 약 30초가 소요 됨에 따라 인터렉션을 초시계
            개발하였습니다.
          </Text>
          <Text>
            chatGPT API를 연결한 후 prompt를 제작하여 상황에 맞는 판결을 내리는
            로직을 구현했습니다. 사용자의 문제가 실질적으로 해결이 되고있는지
            서비스 만족도 조사를 넣었습니다. 그리고 firebase를 통해 data를
            관리하였습니다.
          </Text>
          <Text>
            사이트 공유하기, 다시하기 기능을 통해 Inflow, Retention 수치를
            늘리고자 하였습니다.
          </Text>
        </TextBox>
      </ExplainBox>

      <ExplainBox>
        <ImgBox>
          <Img src={lolmooncheol8} />
          <Img src={lolmooncheol9} />
        </ImgBox>
        <TextBox>
          <Title>◦ 린스타트업 방식의 개발</Title>
          <Text>
            2번째 가설인 유저들의 판결 투표를 진행하기 위해 해당 기능들을
            개발하였습니다. DB와 연결하여 유저들의 판결내역 및 과실내용들을
            관리하는 로직을 백엔드 개발자와 협력하여 개발을 진행하였습니다.
          </Text>
          <Text>firebase Hosting을 통해 빠르게 배포하였습니다.</Text>
        </TextBox>
      </ExplainBox>

      <ExplainBox>
        <ImgBox>
          <Imgshame src={lolmooncheol10} />
          <Imgshame src={lolmooncheol11} />
        </ImgBox>
        <TextBox>
          <Title>◦ 린스타트업 방식의 개발</Title>
          <Text>
            1. 프로젝트 진행 도중 UI만을 제작하여 빠르게 사용자 VOC를 받기위해
            커뮤니티에 배포했습니다.
            <br />- 검증결과 인기글 1위에 등록되었습니다.
          </Text>
          <Text>
            2. Inflow, Churn, Retention 에 대한 지표를 확인하며 프로젝트를
            진행했고, MVP 에 대한 명확한 사고를 계속 재정립하였습니다.
            <br />- 마지막 검증 단계에선 약 5.5% Reteion의 수치를 확인했습니다.
          </Text>
        </TextBox>
      </ExplainBox>
      <Link to={projectPath} style={{ textDecoration: "none" }}>
        <ProjectNextBtn
          nextTitle="Next Project"
          projectName="Matrip : 여행을 함께 즐길 수 있는 친구 만들기 서비스 "
        />
      </Link>
    </>
  );
};

const ExplainBox = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  padding: 20px;
  border: 1px solid #1b2735;
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

export default ProjectAilolmooncheol;
