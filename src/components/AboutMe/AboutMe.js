import { Link } from "react-router-dom";
import ContainerLayout from "../../layouts/Container/Container";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

import "./AboutMe.scss";

const AboutMe = () => (
  <div className="AboutMeSection" id="about-me-anchor">
    <ContainerLayout>
      <div className="grid-about-me">
        <div className="about-me-content">
          <div className="heading-top-line"></div>
          <h1>Nice to meet you, I'm Natan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit fames turpis
            pretium bibendum nisl est sagittis aliquam pretium nunc curabitur
            magna est in nulla id volutpat et venenatis at lacus.
          </p>
          <div className="divider"></div>
          <div className="social">
            <Link to="#">
              <AiFillGitlab /> Gitlab
            </Link>
            <Link to="#">
              <FaLinkedin /> LinkedIn
            </Link>
          </div>
        </div>
        <div className="about-me-picture ">
          <img src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62327a2fb00126408cd587f2_john-carter-avatar-big-developer-webflow-ecommerce-template.jpg" />
        </div>
      </div>
    </ContainerLayout>
  </div>
);

export default AboutMe;
