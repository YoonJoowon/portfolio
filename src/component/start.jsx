import React from "react";
import { styled, keyframes } from "styled-components";

const Star = () => {
  return (
    <Background>
      <div className="night">
        {[...Array(80)].map((_, index) => (
          <div
            key={index}
            className="shooting_star"
            style={{
              animationDelay: `${Math.random() * 9999}ms`,
              top: `${Math.random() * 200 - 30}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </Background>
  );
};

export default Star;

const shootingTime = "9000ms";

const Background = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .night {
    position: relative;
    width: 100vw;
    height: 100vh;
    transform: rotateZ(35deg);
    z-index: -1;
  }

  .shooting_star {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 2px;
    background: linear-gradient(-45deg, #b7ceff, rgba(0, 0, 255, 0));
    border-radius: 999px;
    filter: drop-shadow(0 0 6px #b7ceff);
    animation: tail ${shootingTime} ease-in-out infinite,
      shooting ${shootingTime} ease-in-out infinite;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: calc(50% - 1px);
      right: 0;
      height: 2px;
      background: linear-gradient(
        -45deg,
        rgba(0, 0, 255, 0),
        #b7ceff,
        rgba(0, 0, 255, 0)
      );
      transform: translateX(50%) rotateZ(45deg);
      border-radius: 100%;
      animation: shining ${shootingTime} ease-in-out infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: calc(50% - 1px);
      right: 0;
      height: 2px;
      background: linear-gradient(
        -45deg,
        rgba(0, 0, 255, 0),
        #b7ceff,
        rgba(0, 0, 255, 0)
      );
      transform: translateX(50%) rotateZ(-45deg);
      border-radius: 100%;
      animation: shining ${shootingTime} ease-in-out infinite;
    }
  }

  @keyframes tail {
    0% {
      width: 0;
    }

    30% {
      width: 100px;
    }

    100% {
      width: 0;
    }
  }

  @keyframes shining {
    0% {
      width: 0;
    }

    50% {
      width: 30px;
    }

    100% {
      width: 0;
    }
  }

  @keyframes shooting {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(300px);
    }
  }
`;
