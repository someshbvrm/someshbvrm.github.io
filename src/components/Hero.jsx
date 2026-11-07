import Icon from './Icon.jsx';
import PipelineVisual from './PipelineVisual.jsx';
import profile from '../data/profile.js';
import socialLinks from '../data/socialLinks.js';
import certifications from '../data/certifications.js';
import { resumeUrl } from '../utils/resume.js';

export default function Hero() {
  const featuredCert = certifications.find((c) => c.featured) || certifications[0];

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="glow glow-a" />
        <div className="glow glow-b" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.designation}
          </p>

          <h1 id="hero-title" className="hero-name">
            {profile.name}
          </h1>

          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-cta">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Icon name="external" size={18} /> View Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me <Icon name="arrowRight" size={18} />
            </a>
            <div className="hero-social">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
                <Icon name="linkedin" size={19} />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
                <Icon name="github" size={19} />
              </a>
            </div>
          </div>

          <ul className="hero-highlights" aria-label="Key technologies">
            {profile.highlights.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-side">
          <div className="experience-card">
            <div className="experience-years">
              <span className="years-value">{profile.yearsOfExperience}</span>
              <span className="years-label">
                years of
                <br />
                IT experience
              </span>
            </div>
            <div className="experience-meta">
              <span>
                <Icon name="mapPin" size={15} /> {profile.location}
              </span>
              <span>
                <Icon name="globe" size={15} /> {profile.workMode}
              </span>
              {featuredCert ? (
                <span>
                  <Icon name="award" size={15} /> {featuredCert.code} {featuredCert.level}
                </span>
              ) : null}
            </div>
          </div>
          <PipelineVisual />
        </div>
      </div>

      <div className="container">
        <dl className="stats" style={{ '--stat-count': profile.stats.length + 1 }}>
          {profile.stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat-label">{s.label}</dt>
              <dd className="stat-value">
                {s.value}
                <span className="stat-suffix">{s.suffix}</span>
              </dd>
            </div>
          ))}
          <div className="stat">
            <dt className="stat-label">{profile.certificationStatLabel}</dt>
            <dd className="stat-value">{certifications.length}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
