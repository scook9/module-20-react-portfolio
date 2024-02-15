import "../styles/style.css";
import profilePic from "../assets/profile-pic.jpg";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p id="about-me">
        My name is Spencer and welcome to my software engineering portfolio! The
        website has been updated throughout the course and refactored to React
        to showcase the skills I have learned. Feel free to contact me with any
        suggestions to improve the site or if you would like to learn more.
      </p>
      <li id="profile-pic">
        <img src={profilePic} alt="Spencer Cook's profile picture" />
      </li>
    </section>
  );
}

export default About;
