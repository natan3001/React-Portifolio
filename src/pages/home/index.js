import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Portifolio from "../../components/Portifolio/Portifolio";
import Skills from "../../components/Skills/Skills";

const HomeScreen = () => (
  <>
    <Header />
    <AboutMe />
    <Skills />
    <Portifolio />
    <Contact />
    <Footer />
  </>
);

export default HomeScreen;
