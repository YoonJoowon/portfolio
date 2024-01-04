import React, { useRef } from "react";
import styled from "styled-components";
import ailolmooncheolImage from "../asset/ailolmooncheol.png";

const itemsData = [
  { t: "X-rays", i: ailolmooncheolImage },
  { t: "X-rays", i: ailolmooncheolImage },
  { t: "X-rays", i: ailolmooncheolImage },
  { t: "X-rays", i: ailolmooncheolImage },
];

const ProjectHover = () => {
  const svgRef = useRef();

  const getCoordinates = (e, svg) => {
    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
  };

  const Item = ({ item, index }) => {
    const update = (c) => {
      const clip = document.querySelector(`#clip-${index} circle`);
      clip.setAttribute("cx", c.x);
      clip.setAttribute("cy", c.y);
    };

    const mouseMoveHandler = (e) => {
      update(getCoordinates(e, svgRef.current));
    };

    const touchMoveHandler = (e) => {
      e.preventDefault();
      const touch = e.targetTouches[0];
      if (touch) return update(getCoordinates(touch, svgRef.current));
    };

    return (
      <div
        className="item"
        onMouseMove={mouseMoveHandler}
        onTouchMove={touchMoveHandler}
      >
        <svg
          viewBox="0 0 300 200"
          preserveAspectRatio="xMidYMid slice"
          ref={svgRef}
        >
          <g>
            <circle id={`clip-${index}`} cx="0" cy="0" r="20" fill="#fff" />
            <image
              xlinkHref={item.i}
              width="100%"
              height="100%"
              clipPath={`url(#clip-${index})`}
            />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <Container>
      <Header>
        <h1>SVG 클립 패스 호버 효과</h1>
      </Header>
      <Main>
        <div className="items">
          {itemsData.map((item, index) => (
            <Item key={index} item={item} index={index} />
          ))}
        </div>
      </Main>
    </Container>
  );
};

export default ProjectHover;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: black;
  color: white;
  position: absolute;
`;

const Header = styled.header`
  text-align: center;
  padding-bottom: 3rem;
`;

const Main = styled.main`
  .items {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .item {
    overflow: hidden; 
    position: relative; 
    transition: transform 0.3s, opacity 0.3s; 
  }

  .item:hover circle {
    transform: scale(1);
  }

  .item:hover image {
    opacity: 1;
  }
`;

const Options = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  button {
    width: 100px;
    height: 100px;
    margin-left: 0.5rem;
  }
`;

const Button = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  appearance: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  border-radius: 1px;
  background-color: black;
  color: white;
`;
