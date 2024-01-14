import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Tree from "./tree";

function CanvasTree() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const tree = new Tree(ctx, canvas.width / 1.8, canvas.height);

    const animate = () => {
      tree.draw();
      requestAnimationFrame(animate);
    };

    animate();

    // 컴포넌트가 언마운트될 때 애니메이션 정리
    return () => {
      cancelAnimationFrame(tree.animation);
    };
  }, []);

  return <StyledCanvas ref={canvasRef} width={1920} height={920} />;
}

export default CanvasTree;

const StyledCanvas = styled.canvas`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 400px) {
    height: 110vh;
  }
`;