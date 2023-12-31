import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Text>
        성장을 위한 모든 경험과 기회를 환영합니다. 사용자들에게 직관적이며
        매력적인 경험이 곧 서비스의 시장 경쟁력을 결정짓는 중요한 요소 중
        하나라고 굳게 믿습니다. 데이터(Inflow, Churn, Retention)에 기반하여
        사용자들에게 더 나은 디지털 경험을 제공하고자 합니다.
      </Text>
    </>
  );
};

export default Landing;

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
`;