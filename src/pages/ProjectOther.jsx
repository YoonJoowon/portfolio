import React, { useEffect } from "react";
import other from "../asset/projectFile/other.jpg";
import ProjectCommon from "./ProjectCommon";
import { Link } from "react-router-dom";
import ProjectNextButton from "../component/projectNextBtn";

const ProjectOther = () => {
  const projectId = 0;
  const projectPath = `/Project/${projectId}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectCommon backgroundImage={other} />
      <Link to={projectPath}>
        <ProjectNextButton
          nextTitle="----- Next Project"
          projectName="Matrip"
        />
      </Link>
    </>
  );
};

export default ProjectOther;
