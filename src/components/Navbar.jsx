import "../styles/style.css";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },

  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
};

function Navbar() {
  return (
    <header style={styles.card}>
      <h1 style={styles.heading}>Home</h1>
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

export default Navbar;
