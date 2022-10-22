import { Link } from "react-router-dom";

import "./SectionHeading.scss";

const SectionHeading = (props) => {
  let link = "";
  if (props.linkUrl) {
    link = (
      <div className="heading-link">
        <Link to={props.linkUrl}>{props.linkText}</Link>
      </div>
    );
  }

  return (
    <div className="section-heading">
      <div className="section-subtitle">
        <span>/</span>
        {props.subtitle}
      </div>
      <div className="heading-title">
        <h2>{props.title}</h2>
      </div>
      {link}
    </div>
  );
};

export default SectionHeading;
