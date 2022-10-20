import { useEffect } from "react";
import ContainerLayout from "../../layouts/Container/Container";
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
    <div className="skills-section">
      <ContainerLayout>
        <div className="skill-heading">
          <div className="subtitle">
            <span>/</span>My Skills
          </div>
          <h2>My extensive list of skills</h2>
        </div>
        <div className="skill-list">
          <Skill title="HTML" per="90" />
          <Skill title="JQUERY" per="90" />
          <Skill title="CSS" per="85" />
          <Skill title="CODEIGNITER" per="75" />
          <Skill title="PHP" per="90" />
          <Skill title="REACT" per="40" />
          <Skill title="JAVASCRIPT" per="85" />
          <Skill title="POSTGRES" per="90" />
          <Skill title="SASS" per="80" />
          <Skill title="MYSQL" per="90" />
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Skills;
