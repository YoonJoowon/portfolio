import React from "react";
import matrip from "../asset/projectFile/matrip.jpg";
import matrip2 from "../asset/projectFile/matrip2.jpg";
import ProjectCommon from "./ProjectCommon";

const ProjectMatrip = () => {
  return (
    <>
      <ProjectCommon backgroundImage={matrip} />
      <ProjectCommon backgroundImage={matrip2} />
    </>
  );
};

export default ProjectMatrip;
