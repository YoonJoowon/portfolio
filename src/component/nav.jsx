import React from "react";
import { styled, keyframes } from "styled-components";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <ComponentBox>
        <Link to="/">
          <Component>Home</Component>
        </Link>
        <Link to="/About">
          <Component>About</Component>
        </Link>
        <Link to="/Project">
          <Component>Project</Component>
        </Link>
        <Link to="/Contact">
          <Component>Contact</Component>
        </Link>
      </ComponentBox>
    </>
  );
};

export default Nav;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ComponentBox = styled.div`
  position: fixed;
  right: 10%;
  top: 30%;
  z-index: 1;
`;

const Component = styled.div`
  animation: ${fadeIn} 3s ease-in-out forwards;
  width: 40px;
  height: 40px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  opacity: 0.1;
  border-radius: 100%;
  margin-top: 25px;

  font-size: 16px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;
