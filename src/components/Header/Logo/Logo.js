import { Link } from "react-router-dom";
import logo from "./../../../assets/images/logo-header.svg";

import "./Logo.scss";

const Logo = () => (
  <Link to="#home">
    <img className="logo-header" src={logo} alt="logo-image" />
  </Link>
);

export default Logo;
