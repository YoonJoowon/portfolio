import React from "react";
import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import CanvasTree from "../canvas/canvasTree.jsx";
import Star from "../component/start.jsx";

const Landing = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasTree />
      </CanvasTreeContainer>
      <Background>
        <TextBox>
          <Text>
            나무가 성장하는 것 처럼, 삶의 모든 경험과 기회를 환영하여 성장하고자
            합니다.
          </Text>
          <Text>
            사용자들에게 직관적이며 매력적인 경험이 서비스의 곧 시장
            경쟁력이라고 굳게 믿습니다.
          </Text>
        </TextBox>
      </Background>
      <Star />
    </>
  );
};

export default Landing;

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
  margin-top: 200px;
  position: absolute;
`;

const Text = styled.div`
  width: 400px;
  padding: 30px;
  color: white;
  opacity: 0.1;
  animation: ${fadeIn} 3s ease-in-out forwards;

  font-size: 1rem;
  line-height: 2;
  text-align: left;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin: 20px;
  margin-top: 40px;
`;

const CanvasTreeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
