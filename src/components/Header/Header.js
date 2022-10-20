import ContainerLayout from "../../layouts/Container/Container";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

import "./Header.scss";

const Header = () => (
  <ContainerLayout>
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  </ContainerLayout>
);

export default Header;
