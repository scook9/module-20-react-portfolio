import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <header className="header">
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/About"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/Resume"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
