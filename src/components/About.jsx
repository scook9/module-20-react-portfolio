import "../styles/style.css";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p id="about-me">
        My name is Spencer and welcome to my software engineering portfolio! The
        website will be updated throughout the course to showcase the skills I
        have learned. Feel free to contact me with any suggestions to improve
        the site or if you would like to learn more.
      </p>
      <li id="profile-pic">
        <img
          src="./src/assets/profile-pic.jpg"
          alt="Spencer Cook's profile picture"
        />
      </li>
    </section>
  );
}

export default About;
