import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Portifolio from "../../components/Portifolio/Portifolio";
import Skills from "../../components/Skills/Skills";

const HomeScreen = () => (
  <>
    <Header />
    <AboutMe id="about-me-anchor" />
    <Skills id="my-skill-anchor" />
    <Portifolio id="portifolio-anchor" />
    <Contact id="contact-anchor" />
    <Footer />
  </>
);

export default HomeScreen;
