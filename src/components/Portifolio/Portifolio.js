import ContainerLayout from "../../layouts/Container/Container";
import Project from "./Project/Project";
import SectionHeading from "./../Section/SectionHeading/SectionHeading";

import "./Portifolio.scss";

const Portifolio = () => (
  <div className="portifolio-section">
    <ContainerLayout>
      <SectionHeading
        subtitle="My portifolio"
        title="Take a look at the latest projects I've done"
        linkText="See all my projects"
        linkUrl="#"
      />
      <div className="portifolio-grid">
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Simple Website Development"
          logo={require("./../../assets/images/project-logo.svg").default}
          img={require("./../../assets/images/project-image.png")}
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Simple Website Development"
          logo={require("./../../assets/images/project-logo.svg").default}
          img={require("./../../assets/images/project-image.png")}
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Simple Website Development"
          logo={require("./../../assets/images/project-logo.svg").default}
          img={require("./../../assets/images/project-image.png")}
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Simple Website Development"
          logo={require("./../../assets/images/project-logo.svg").default}
          img={require("./../../assets/images/project-image.png")}
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Simple Website Development"
          logo={require("./../../assets/images/project-logo.svg").default}
          img={require("./../../assets/images/project-image.png")}
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Simple Website Development"
          logo={require("./../../assets/images/project-logo.svg").default}
          img={require("./../../assets/images/project-image.png")}
        />
      </div>
    </ContainerLayout>
  </div>
);

export default Portifolio;
