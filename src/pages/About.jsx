import React from "react";
import { styled, keyframes } from "styled-components";
import CanvasBackground from "../canvas/canvasBackground";
import Resume from "../component/resume";

const About = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasBackground aboutPage={true} />
      </CanvasTreeContainer>
      <ResumeBox>
        <Resume />
        <TextBox>
          <Text>
            <span>● React</span>를 사용하며 컴포넌트화를 합리적인 방식으로
            분리하는 데에 능숙합니다.
          </Text>
          <Text $animationDelay="0.5s">
            <span>
              ● Redux-toolkit, Recoil
              <br />
            </span>
            상태를 효과적으로 관리하고 유지보수에 용이한 코드를 작성할 수
            있습니다.
          </Text>
          <Text $animationDelay="1s">
            <span>
              ● Styled components <br />
            </span>
            다수의 UI 구현 경험으로 사용자 인터랙션에 대한 높은 이해도가
            있습니다. 상태에 따라 동적으로 스타일을 변경하여 사용자 경험을
            향상시킬 수 있습니다.
          </Text>
          <Text $animationDelay="1.5s">
            <span>
              ● Typescript <br />
            </span>
            프로젝트 진행시 TypeScript를 도입하여 코드의 안정성을
            향상시켰습니다. 정적 타이핑을 통해 개발 초기에 버그를 사전에 방지할
            수 있습니다.
          </Text>
          <Text $animationDelay="2s">
            <span>
              ● Firebase <br />
            </span>
            Firebase Storage를 통해 데이터를 관리했습니다. Firebase Hosting을
            사용하여 빠르게 웹을 배포했습니다.
          </Text>
          <Text $animationDelay="2.5s">
            <span>
              ● Git, Jira, Notion <br />
            </span>
            효율적인 협업을 이끌고 체계적으로 문서를 관리한 경험이 있습니다.
          </Text>
        </TextBox>
      </ResumeBox>
    </>
  );
};

export default About;

const TextFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CanvasTreeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ResumeBox = styled.div`
  display: flex;
  position: absolute;
  top: 3%;
  left: 10%;
  width: 1200px;
  margin-left: 100px;

  @media (max-width: 1600px) {
    margin-left: 0px;
  }

  @media (max-width: 1480px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const TextBox = styled.div`
  margin-left: 100px;

  a {
    text-decoration: none;
  }

  @media (max-width: 1480px) {
    display: none;
  }
`;

const Text = styled.div`
  width: 400px;
  padding: 10px;
  color: white;

  font-size: 1rem;
  line-height: 1.8;
  text-align: left;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin-top: 24px;

  animation: ${TextFadeIn} 0.5s ease-in-out forwards;
  animation-delay: ${({ $animationDelay }) => $animationDelay || "0s"};
  opacity: 0;

  span {
    color: #b7ceff;
  }
`;
