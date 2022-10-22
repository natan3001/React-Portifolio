import "./Skill.scss";

const Skill = (props) => (
  <div className="skill">
    <h3 className="skill-title">
      {props.title}{" "}
      <span className="skill-knowledge-time"> - {props.experience} years</span>{" "}
    </h3>
    <div className="skill-bar">
      <div className="skill-per" data-per={`${props.per}`}></div>
    </div>
  </div>
);

export default Skill;
