import "../styles/style.css";
import moduleOnePic from "../assets/module-1-challenge.PNG";
import menyouPic from "../assets/menyou.png";
import starRayDesignPic from "../assets/star-ray-design.png";

function Portfolio() {
  return (
    <section>
      <h2 id="projects">Projects</h2>
      <ul id="card-spacing">
        <li className="card">
          <a
            className="link"
            href="https://scook9.github.io/module-1-challenge/#search-engine-optimization"
            target="_blank"
          >
            <img src={moduleOnePic} alt="Module 1 Challenge background photo" />
          </a>
          <h3 className="project-title">Search Engine Optimization (SEO)</h3>
        </li>
        <li className="card">
          <a
            className="link"
            href="https://scook9.github.io/menYou/"
            target="_blank"
          >
            <img src={menyouPic} alt="menYou project" />
          </a>
          <h3 className="project-title">menYou</h3>
        </li>
        <li className="card">
          <a
            className="link"
            href="https://scook9.github.io/menYou/"
            target="_blank"
          >
            <img src={starRayDesignPic} alt="menYou project" />
          </a>
          <h3 className="project-title">Star Ray Design</h3>
        </li>
        <li className="card">
          <img
            src="./src/assets/huma-kabakci-oRk4Ep65tRc-unsplash.jpg"
            alt="Coming soon"
          />
          <h3 className="project-title">EZHomesteading</h3>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
