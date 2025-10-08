import "../style/myskils.css";
export default function MySkills() {
  return (
    <section className="skills-section m-10" id="Skills"> 
    <h2 className="skills-title">My Skills</h2>
  
    <div className="skills-wrapper">
  
      {/* Hard Skills */}
      <div className="skills-column">
        <h3 className="skills-subtitle">Hard Skills</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
            <p>HTML</p>
            <input type="range" value="90" max="100" disabled style={{ "--value": "90%" }} />
          </div>
          <div className="skill-card">
            <i className="fa-brands fa-css3-alt" style={{ color: "#264de4" }}></i>
            <p>CSS</p>
            <input type="range" value="90" max="100" disabled style={{ "--value": "90%" }} />
          </div>
          <div className="skill-card">
            <i className="fa-brands fa-js" style={{ color: "#f0db4f" }}></i>
            <p>JavaScript</p>
            <input type="range" value="80" max="100" disabled style={{ "--value": "80%" }} />
          </div>
          <div className="skill-card">
            <i className="fa-brands fa-react" style={{ color: "#61dbfb" }}></i>
            <p>React</p>
            <input type="range" value="70" max="100" disabled style={{ "--value": "60%" }} />
          </div>
          <div className="skill-card">
            <i className="fa-brands fa-bootstrap" style={{ color: "#7952b3" }}></i>
            <p>Bootstrap</p>
            <input type="range" value="85" max="100" disabled style={{ "--value": "90%" }} />
          </div>
          <div className="skill-card">
            <i className="fa-brands fa-tailwind" style={{ color: "#38bdf8" }}></i>
            <p>Tailwind CSS</p>
            <input type="range" value="85" max="100" disabled style={{ "--value": "80%" }} />
          </div>
           <div className="skill-card">
      <i className="fa-brands fa-figma" style={{ color: "#F24E1E" }}></i>
      <p>Figma</p>
      <input type="range" value="85" max="100" disabled style={{ "--value": "85%" }} />
    </div>
        </div>
      </div>
  
      {/* Soft Skills */}
      <div className="soft-skills-grid">
        <h3 className="skills-subtitle">Soft Skills</h3>
        <div className="soft-skills-list">
          <div className="soft-skill-card">Teamwork</div>
          <div className="soft-skill-card">Communication</div>
          <div className="soft-skill-card">Problem Solving</div>
          <div className="soft-skill-card">Adaptability</div>
          <div className="soft-skill-card">Creativity</div>
          <div className="soft-skill-card">Time Management</div>
        </div>
      </div>
  
    </div>
  </section>
  

  );
}
