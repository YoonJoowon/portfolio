import React, { useRef } from "react";
import styled from "styled-components";

function CanvasBackground() {
  const canvasRef = useRef(null);
  return <StyledCanvas ref={canvasRef} width={1920} height={920} />;
}

export default CanvasBackground;

const StyledCanvas = styled.canvas`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 150vh;
  }
`;
