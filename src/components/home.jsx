import "../style/home.css";
import "../styles.css";

export default function Home() {
  return (
    <div className="home-container">
      <img src="/img/photo.jpg" alt="person img" />
      <h1>Reem Abdelrazek</h1>
      <p className="animated-role">
        I am a <span className="words"></span>
      </p>

      {/* أيقونات التواصل */}
      <div className="contact-icons">
        <a
          href="https://github.com/reem-abdelrazek20"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/reem-abdelrazek20"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <a href="/cv.pdf" download>
        <button className="download-btn">Download CV</button>
      </a>
    </div>
  );
}
