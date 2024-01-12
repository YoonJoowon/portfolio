import React from "react";
import { styled, keyframes } from "styled-components";
import CanvasBackground from "../canvas/canvasBackground.jsx";

const Contact = () => {
  return (
    <>
      <CanvasTreeContainer>
        <CanvasBackground />
      </CanvasTreeContainer>
      <Background>
        <TextBox>
          <a href="mailto:ysw6963@gmail.com">
            <Title>Contact</Title>
          </a>
          <Subtitle>
            프론트엔드 개발자 윤주원입니다. <br />
            자라나는 나무처럼 꾸준하게 성장하고, 제 강점과 노력을 바탕으로
            조직에 보탬이 되고 싶습니다.
          </Subtitle>
          <TextSubBox>
            <a href="mailto:ysw6963@gmail.com">
              <Text>
                이메일 : <span>ysw6963@gmail.com</span>
              </Text>
            </a>
            <a href="https://github.com/YoonJoowon">
              <Text>
                Github : <span>https://github.com/YoonJoowon</span>
              </Text>
            </a>
            <a href="https://velog.io/@wndnjs6224/posts">
              <Text>
                블로그 : <span>https://velog.io/@wndnjs6224/posts</span>
              </Text>
            </a>
            <Text>전화번호 : +82 010 4325 6224</Text>
          </TextSubBox>
        </TextBox>
      </Background>
    </>
  );
};

export default Contact;

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
  top: 15%;
  left: 5%;
  width: 1000px;

  a {
    text-decoration: none;
  }

`;

const Title = styled.div`
  width: 400px;
  padding: 30px;
  color: white;
  font-size: 2rem;
  line-height: 2;
  text-align: left;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin: 20px;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 300px;
    padding: 20px;
    font-size: 1.4rem;
  }

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
`;

const Subtitle = styled.div`
  width: 900px;
  padding: 30px;
  color: white;
  font-size: 1rem;
  line-height: 2;
  text-align: left;
  background: rgba(27, 39, 53, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin: 20px;
  margin-top: 40px;

  @media (max-width: 1280px) {
    width: 700px;
  }

  @media (max-width: 1080px) {
    display: none;
  }

  @media (max-width: 768px) {
    width: 300px;
    display: block;
    padding: 20px;
    font-size: 0.9rem;
  }
`;

const TextSubBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    display: block;
    flex-wrap: nowrap;
  }
`;

const Text = styled.div`
  width: 400px;
  padding: 30px;
  color: white;
  font-size: 1rem;
  line-height: 2;
  text-align: left;
  background: rgba(27, 39, 53, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin: 20px;
  margin-top: 40px;

  span {
    color: #b7ceff;
    text-decoration: none;
  }

  @media (max-width: 1280px) {
    width: 350px;
  }

  @media (max-width: 1080px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 300px;
    padding: 20px;
    font-size: 0.9rem;
  }


`;
