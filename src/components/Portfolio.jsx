import "../styles/style.css";

function Portfolio() {
  return (
    <section>
      <h2 id="projects">Projects</h2>
      <ul id="card-spacing">
        <li class="card">
          <a
            class="link"
            href="https://scook9.github.io/module-1-challenge/#search-engine-optimization"
            target="_blank"
          >
            <img
              src="./src/assets/module-1-challenge.PNG"
              alt="Module 1 Challenge background photo"
            />
          </a>
          <h3 class="project-title">Search Engine Optimization (SEO)</h3>
        </li>
        <li class="card">
          <a
            class="link"
            href="https://scook9.github.io/menYou/"
            target="_blank"
          >
            <img src="./src/assets/menyou.png" alt="menYou project" />
          </a>
          <h3 class="project-title">menYou</h3>
        </li>
        <li class="card">
          <a
            class="link"
            href="https://scook9.github.io/menYou/"
            target="_blank"
          >
            <img src="./src/assets/menyou.png" alt="menYou project" />
          </a>
          <h3 class="project-title">Coming Soon</h3>
        </li>
        <li class="card">
          <img
            src="./src/assets/huma-kabakci-oRk4Ep65tRc-unsplash.jpg"
            alt="Coming soon"
          />
          <h3 class="project-title">Coming Soon</h3>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
