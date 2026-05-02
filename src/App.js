import React from 'react';
import './App.css';
import {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo
} from './portfolio';
import myLogo from './assets/images/my-logo.png';
import pixelCat from './assets/images/pixel-cat.png';

function App() {
  return (
    <div className="container">
      <nav>
        <a href="/" className="nav-logo">
          <img src={myLogo} alt="Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <section id="about">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>I'm a passionate creative developer and designer with experience building digital products that users love. I believe in the power of good design and clean code to solve real problems.</p>
            <p>When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing my knowledge.</p>
            <p>I'm always excited to work on projects that challenge me to grow and learn something new.</p>
          </div>
          <div className="about-image">
            <img src={pixelCat} alt="Pixel Cat" style={{ maxWidth: '250px' }} />
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Frameworks</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">FastAPI</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>AI / ML & DBs</h3>
            <div className="skill-tags">
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Pandas</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {workExperiences.experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{exp.date === 'Past' ? '2023' : exp.date}</div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="timeline-subtitle">at {exp.company}</p>
                <p className="timeline-desc">{exp.desc}</p>
                {exp.descBullets && (
                  <ul className="timeline-bullets">
                    {exp.descBullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="timeline">
          {bigProjects.projects.map((proj, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">Proj {index + 1}</div>
              <div className="timeline-content">
                <h3>{proj.projectName}</h3>
                <p className="timeline-desc">{proj.projectDesc}</p>
                {proj.footerLink && proj.footerLink.length > 0 && (
                  <div className="project-links">
                    {proj.footerLink.map((link, i) => (
                      <a href={link.url} className="project-link" target="_blank" rel="noreferrer" key={i}>
                        {link.name} &rarr;
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements">
        <h2 className="section-title">Achievements</h2>
        <div className="skills-grid">
          {achievementSection.achievementsCards.map((achieve, index) => (
            <div className="skill-card" key={index}>
              <h3>{achieve.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{achieve.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-container">
        <h2 className="section-title">Let's Connect</h2>
        <a href={`mailto:${contactInfo.email_address}`} className="contact-email">{contactInfo.email_address}</a>
        <div className="social-links">
          {socialMediaLinks.github && (
            <a href={socialMediaLinks.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
