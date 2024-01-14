import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function CanvasBackground() {
  const canvasRef = useRef(null);
  const location = useLocation();

  return (
    <StyledCanvas
      as="canvas"
      location={location}
      ref={canvasRef}
      width={1920}
      height={920}
    />
  );
}

export default CanvasBackground;

const StyledCanvas = styled.div`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 678px) {
    height: ${(props) =>
      props.location.pathname === "/About" ? "100vh" : "200vh"};
  }

  @media (max-width: 678px) {
    height: ${(props) =>
      props.location.pathname === "/Contact" ? "130vh" : "200vh"};
  }
`;
