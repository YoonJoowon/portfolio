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

  const updateClipPath = (index, c) => {
    const clip = document.querySelector(`#clip-${index} circle`);
    clip.setAttribute("cx", c.x);
    clip.setAttribute("cy", c.y);
  };

  const Item = ({ item, index }) => {
    const mouseMoveHandler = (e) => {
      const coordinates = getCoordinates(e, svgRef.current);
      updateClipPath(index, coordinates);
    };

    const touchMoveHandler = (e) => {
      e.preventDefault();
      const touch = e.targetTouches[0];
      if (touch) {
        const coordinates = getCoordinates(touch, svgRef.current);
        updateClipPath(index, coordinates);
      }
    };

    return (
      <ItemContainer
        onMouseMove={mouseMoveHandler}
        onTouchMove={touchMoveHandler}
      >
        <StyledSVG
          viewBox="0 0 300 200"
          preserveAspectRatio="xMidYMid slice"
          ref={svgRef}
        >
          <clipPath id={`clip-${index}`}>
            <circle cx="0" cy="0" r="100" fill="#fff" />
          </clipPath>
          <StyledImage
            xlinkHref={item.i}
            width="100%"
            height="100%"
            clipPath={`url(#clip-${index})`}
          />
        </StyledSVG>
      </ItemContainer>
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
`;

const ItemContainer = styled.div`
  overflow: hidden;
  position: relative;
  transition: transform 0.3s, opacity 0.3s;

  &:hover circle {
    transform: scale(1);
  }

  &:hover image {
    opacity: 1;
  }
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.image`
  width: 100%;
  height: 100%;
`;

export default ProjectHover;
