import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Tree from "./tree";

function CanvasTree() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const tree = new Tree(ctx, canvas.width / 2, canvas.height);

    const animate = () => {
      tree.draw();
      requestAnimationFrame(animate);
    };

    animate();

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
`;
