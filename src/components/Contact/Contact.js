import { Link } from "react-router-dom";
import ContainerLayout from "../../layouts/Container/Container";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io";
import { AiFillGitlab } from "react-icons/ai";

import "./Contact.scss";

const Contact = () => (
  <section className="contact-session" id="contact-anchor">
    <ContainerLayout>
      <div className="heading-top-line"></div>
      <h3 className="contact-title">Let’s work together</h3>
      <div className="contact-content">
        <h4>Get in touch with me</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisci elit donec faucibus
          adipiscing mauris.
        </p>
        <div className="social-links">
          <Link to="#">
            <AiFillGitlab />
          </Link>
          <Link to="#">
            <IoLogoFacebook />
          </Link>
          <Link to="#">
            <IoLogoTwitter />
          </Link>
          <Link to="#">
            <IoLogoInstagram />
          </Link>
          <Link to="#">
            <IoLogoLinkedin />
          </Link>
          <Link to="#">
            <IoLogoYoutube />
          </Link>
        </div>
      </div>
      <div className="contact-methods">
        <div className="contact">
          <span>Email Me:</span>
          <a href="mailto:contact@example.com ">contact@example.com</a>
          <div className="link-underline">
            <div className="link-underline-bar"></div>
          </div>
        </div>
        <div className="contact">
          <span>Call me:</span>
          <a href="https://wa.me/5599912345678" target="_blank">
            (99) 9 1234-5678
          </a>
          <div className="link-underline">
            <div className="link-underline-bar"></div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  </section>
);

export default Contact;
