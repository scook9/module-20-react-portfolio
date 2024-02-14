import "../styles/style.css";

function Contact() {
  return (
    <section>
      <h2 id="contact">Contact</h2>
      <ul id="card-spacing">
        <li>
          <a class="link" href="tel:+6124196236">
            (612) 419-6236
          </a>
        </li>
        <li>
          <a class="link" href="mailto: spencerrcook@hotmail.com">
            SpencerRCook@hotmail.com
          </a>
        </li>
        <li>
          <a class="link" href="https://github.com/scook9" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a
            class="link"
            href="https://www.linkedin.com/in/spencercook9/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
