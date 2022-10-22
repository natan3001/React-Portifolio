import { Link } from "react-router-dom";
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
            <Link to="#home-anchor">About Me</Link>
          </li>
          <li>
            <Link to="#about-anchor">My Skill</Link>
          </li>
          <li>
            <Link to="#blog-anchor">Portifolio</Link>
          </li>
          <li>
            <Link to="#portifolio-anchor">Contact</Link>
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
