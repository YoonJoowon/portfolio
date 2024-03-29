import React from "react";
import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ComponentBox>
        <StyledLink to="/">
          <Component>Home</Component>
        </StyledLink>
        <StyledLink to="/About">
          <Component>About</Component>
        </StyledLink>
        <StyledLink to="/Project">
          <Component>Project</Component>
        </StyledLink>
        <StyledLink to="/Contact">
          <Component>Contact</Component>
        </StyledLink>
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ComponentBox = styled.div`
  position: fixed;
  right: 10%;
  top: 30%;
  z-index: 1;

  Link {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 1.2rem;
    position: absolute;
    display: flex;
    margin: auto;
    gap: 40px;
    top: 5%;
  }

  @media (max-width: 500px) {
    width: 80%;
    font-size: 0.9rem;
    position: absolute;
    display: flex;
    margin: auto;
    gap: 15px;
    top: 5%;
  }
`;

const Component = styled.div`
  animation: ${fadeIn} 3s ease-in-out forwards;
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  opacity: 0.1;
  border-radius: 100%;
  margin-top: 30px;

  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    margin: auto;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    margin: auto;
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
`;
