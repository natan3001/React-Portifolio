import { Link } from "react-router-dom";

import "./Project.scss";

const Project = (props) => (
  <Link className="project-link" to={props.link ?? "#"}>
    <div className="project">
      <div className="project-tags">
        <span>{props.tagOne}</span>
        <span>{props.tagTwo}</span>
      </div>
      <div className="project-heading">
        <div className="project-logo">
          <img src={props.logo} />
        </div>
        <h2 className="project-title">{props.title}</h2>
      </div>
      <img className="project-background" src={props.img} />
    </div>
  </Link>
);

export default Project;
