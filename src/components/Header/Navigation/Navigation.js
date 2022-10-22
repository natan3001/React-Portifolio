import { FaBars, FaTimes } from "react-icons/fa";

import "./Navigation.scss";

const HandleClickHamburger = () => {
  const navMenu = document.querySelector(".header-nav-menu");
  const navBars = document.querySelector(".nav-bars");
  const navTimes = document.querySelector(".nav-times");
  navMenu.classList.toggle("show");
  navBars.classList.toggle("hidden");
  navTimes.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
  window.scrollTo(0, 0);
};

const Navigation = () => {
  return (
    <div className="header-nav">
      <div className="header-nav-menu">
        <ul>
          <li>
            <a href="#about-me-anchor">About Me</a>
          </li>
          <li>
            <a href="#my-skill-anchor">My Skill</a>
          </li>
          <li>
            <a href="#portifolio-anchor">Portifolio</a>
          </li>
          <li>
            <a href="#contact-anchor">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header-nav-hamburger" onClick={HandleClickHamburger}>
        <i className="nav-bars">
          <FaBars />
        </i>
        <i className="nav-times hidden">
          <FaTimes />
        </i>
      </div>
    </div>
  );
};

export default Navigation;
