import "../styles/skills.css";


export default function Skills () {
    return (
        <div>
            <section className="skills-section">
  <div className="container">
    <div className="section-header">
      <h2 className="subtitle">Skills</h2>
      <h1 className="title">My Skills</h1>
    </div>
    
    <div className="skills-list">
      <div className="skill">
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">           </div>
            <h2 className="skill-title">HTML</h2>
          </div>
          <div className="skill-progress">
            <div className="progress-bar">
              <div className="progress-bar-fill html"></div>
            </div>
            <p className="skill-percentage">100%</p>
          </div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">      </div>
            <h2 className="skill-title">CSS</h2>
          </div>
          <div className="skill-progress">
            <div className="progress-bar">
              <div className="progress-bar-fill css"></div>
            </div>
            <p className="skill-percentage">95%</p>
          </div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">    </div>
            <h2 className="skill-title">JavaScript</h2>
          </div>
          <div className="skill-progress">
            <div className="progress-bar">
              <div className="progress-bar-fill javascript"></div>
            </div>
            <p className="skill-percentage">90%</p>
          </div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">   </div>
            <h2 className="skill-title">TypeScript</h2>
          </div>
          <div className="skill-progress">
            <div className="progress-bar">
              <div className="progress-bar-fill typescript"></div>
            </div>
            <p className="skill-percentage">85%</p>
          </div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-card">
          <div className="skill-header">
            <div className="skill-icon">    </div>
            <h2 className="skill-title">Next.js</h2>
          </div>
          <div className="skill-progress">
            <div className="progress-bar">
              <div className="progress-bar-fill nextjs"></div>
            </div>
            <p className="skill-percentage">80%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}