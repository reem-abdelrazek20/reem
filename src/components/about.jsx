import "../style/about.css";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>Hi, I'm Reem Abdelrazek, a Front-End Developer and UI/UX Designer</h2>
        <p>
         I specialize in building responsive and user-friendly websites using modern technologies such as HTML, CSS, JavaScript, and React, in addition to designing user interfaces and experiences using Figma.
I’m passionate about creating clean, accessible designs and continuously improving my skills to deliver the best user experience possible.
        </p>

        <div className="about-info" >
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
