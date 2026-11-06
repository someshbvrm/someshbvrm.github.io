import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import profile from '../data/profile.js';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader index="01" eyebrow="About" title={profile.sections.about.title} lead={profile.sections.about.lead} id="about-title" />

        <div className="about-grid">
          <Reveal className="about-text">
            {profile.summary.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead-para' : ''}>
                {p}
              </p>
            ))}
          </Reveal>

          <div className="focus-grid">
            {profile.focusAreas.map((f, i) => (
              <Reveal key={f.title} className="card focus-card" delay={i * 80}>
                <span className="icon-tile">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
