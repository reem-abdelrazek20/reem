import "../style/header.css";
export default function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact-form">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
