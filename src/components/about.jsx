import "../style/about.css";
export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Hi, I'm Reem Abdelrazek, based in Egypt</h2>
        <p>
          I'm a front-end developer with growing experience in building
          responsive websites, creating clean user interfaces, and using modern
          web technologies like HTML, CSS, JavaScript, and React.
        </p>

        <div className="about-info" id="about">
          <div>
            <h3>Experience</h3>
            <p>+1 Year</p>
          </div>
          <div>
            <h3>Projects</h3>
            <p>+5 Completed</p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Available Online</p>
          </div>
        </div>

        <a className="contact-btn" href="mailto:reemsadek2000@gmail.com">
          Contact Me
        </a>
      </div>
    </section>
  );
}
