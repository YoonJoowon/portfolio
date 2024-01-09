import React from "react";
import { styled, keyframes } from "styled-components";
import CanvasTree from "../canvas/canvasTree.jsx";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasTree />
      </CanvasTreeContainer>
      <Background>
        <TextBox>
          <Link to="/About">
            <Title>
              안녕하세요! <br />
              프론트엔드 개발자 윤주원입니다.
            </Title>
            <Text>
              나무가 성장하는 것 처럼, 삶의 모든 경험과 기회를 환영하여
              성장하고자 합니다.
            </Text>
            <Text>
              사용자들에게 직관적이며 매력적인 경험이 서비스의 곧 시장
              경쟁력이라고 굳게 믿습니다.
            </Text>
            <Text>
              데이터(Inflow, Churn, Retention)에 기반하여 사용자들에게 더 나은
              디지털 경험을 제공하고자 합니다.
            </Text>
          </Link>
        </TextBox>
      </Background>
    </>
  );
};

export default Landing;

const CanvasTreeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TextBox = styled.div`
  animation: ${fadeIn} 3s ease-in-out forwards;
  position: absolute;
  padding: 200px 0px 0px 100px;

  a {
    text-decoration: none;
  }

  @media (max-width: 1050px) {
    text-align: center;
    margin: auto;
  }

  @media (max-width: 768px) {
    padding: 200px 0px 0px 0px;
  }
`;

const Title = styled.div`
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

  /* 박스 내부의 요소들에 대한 스타일 */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }

  &::before {
    top: -5px;
    left: -5px;
    border-top: none;
    border-left: none;
  }

  &::after {
    bottom: -5px;
    right: -5px;
    border-bottom: none;
    border-right: none;
  }

  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 15px;
    margin: auto;
    margin-bottom: 80px;
    font-size: 1.2rem;
  }
`;

const Text = styled.div`
  width: 400px;
  padding: 30px;
  color: white;

  font-size: 1rem;
  line-height: 2;
  text-align: left;
  background: 1b2735 (0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    margin-bottom: 40px;
    padding: 15px;
    font-size: 1.2rem;
  }
`;
