// Here we are importing a CSS file as a dependency
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Home</h1>
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
