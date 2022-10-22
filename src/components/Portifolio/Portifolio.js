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
          title="Crypto Website Development for DeFi X"
          logo="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232279759ed2980aff418c9_defi-project-logo-developer-webflow-ecommerce-template.png"
          img="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template.png"
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Meu projeto 2 quier desdas"
          logo="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232279759ed2980aff418c9_defi-project-logo-developer-webflow-ecommerce-template.png"
          img="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template.png"
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Meu projeto 2 quier desdas"
          logo="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232279759ed2980aff418c9_defi-project-logo-developer-webflow-ecommerce-template.png"
          img="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template.png"
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Meu projeto 2 quier desdas"
          logo="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232279759ed2980aff418c9_defi-project-logo-developer-webflow-ecommerce-template.png"
          img="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template.png"
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Meu projeto 2 quier desdas"
          logo="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232279759ed2980aff418c9_defi-project-logo-developer-webflow-ecommerce-template.png"
          img="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template.png"
        />
        <Project
          tagOne="React JS"
          tagTwo="Web Development"
          title="Meu projeto 2 quier desdas"
          logo="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232279759ed2980aff418c9_defi-project-logo-developer-webflow-ecommerce-template.png"
          img="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template.png"
        />
      </div>
    </ContainerLayout>
  </div>
);

export default Portifolio;
