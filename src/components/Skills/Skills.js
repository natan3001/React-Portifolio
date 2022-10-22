import { useEffect } from "react";
import ContainerLayout from "../../layouts/Container/Container";
import SectionHeading from "../Section/SectionHeading/SectionHeading";
import Skill from "./Skill/Skill";

import "./Skills.scss";

const setSkillWidth = () => {
  const skillPers = document.querySelectorAll(".skill-per");
  skillPers.forEach((skill) => {
    const percentage = skill.dataset.per;
    skill.style.width = `${percentage}%`;
  });
};

const Skills = () => {
  useEffect(() => {
    setSkillWidth();
  }, []);

  return (
    <div className="skills-section" id="my-skill-anchor">
      <ContainerLayout>
        <SectionHeading
          subtitle="My Skills"
          title="My extensive list of skills"
        />
        <div className="skill-list">
          <Skill title="HTML" per="90" experience="3" />
          <Skill title="JQUERY" per="90" experience="3" />
          <Skill title="CSS" per="85" experience="3" />
          <Skill title="CODEIGNITER" per="75" experience="3" />
          <Skill title="PHP" per="90" experience="3" />
          <Skill title="REACT" per="40" experience="1" />
          <Skill title="JAVASCRIPT" per="85" experience="3" />
          <Skill title="POSTGRES" per="90" experience="3" />
          <Skill title="SASS" per="60" experience="1" />
          <Skill title="MYSQL" per="90" experience="3" />
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Skills;
