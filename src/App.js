import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Tree from "./tree";

function App() {
  const canvasRef = useRef(null);
  //userRef훅을 사용하여 Canvas 요소에 접근

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // canvas와 그림을 그릴 컨텍스트 설정

    const tree = new Tree(ctx, canvas.width / 2, canvas.height);
    // Canvas 중앙에 위치

    const animate = () => {
      tree.draw();
      //tree 클래스의 drwa 메서드 호출
      requestAnimationFrame(animate);
      //계속해서 애니메이션 프레임 호출
    };

    animate();

    return () => {
      // 컴포넌트가 언마운트되면 애니메이션 프레임을 중지함
      cancelAnimationFrame(tree.animation);
    };
  }, []);

  return <StyledCanvas ref={canvasRef} width={1920} height={860} />;
}

export default App;

const StyledCanvas = styled.canvas`
  background-color: black;
`;