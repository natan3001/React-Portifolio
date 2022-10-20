import { Link } from "react-router-dom";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const HandleClickHamburger = () => {
  const navMenu = document.querySelector(".header-nav-menu");
  const navBars = document.querySelector(".nav-bars");
  const navTimes = document.querySelector(".nav-times");
  navMenu.classList.toggle("show");
  navBars.classList.toggle("hidden");
  navTimes.classList.toggle("hidden");
};

const Navigation = () => {
  return (
    <div className="header-nav">
      <div className="header-nav-menu">
        <ul>
          <li>
            <Link to="#home-anchor">Home</Link>
          </li>
          <li>
            <Link to="#about-anchor">About</Link>
          </li>
          <li>
            <Link to="#blog-anchor">Blog</Link>
          </li>
          <li>
            <Link to="#portifolio-anchor">Portifolio</Link>
          </li>
        </ul>
      </div>
      <div className="header-nav-hamburger" onClick={HandleClickHamburger}>
        <FontAwesomeIcon className="nav-bars" icon={faBars} />
        <FontAwesomeIcon className="nav-times hidden" icon={faTimes} />
      </div>
    </div>
  );
};

export default Navigation;
