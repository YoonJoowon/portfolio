import React, { useEffect } from "react";
import other from "../asset/projectFile/other.jpg";
import ProjectCommon from "./ProjectCommon";
import { Link } from "react-router-dom";
import ProjectNextBtn from "../component/projectNextBtn";

const ProjectOther = () => {
  const projectId = 0;
  const projectPath = `/Project/${projectId}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectCommon backgroundImage={other} />
      <Link to={projectPath} style={{ textDecoration: "none" }}>
        <ProjectNextBtn
          nextTitle="Next Project"
          projectName="AI롤문철 : 리그오브레전드 게임 분생 상황에서의 과실을 판단해주고 플레이 피드백을 내려주는 AI 웹서비스 "
        />
      </Link>
    </>
  );
};

export default ProjectOther;
