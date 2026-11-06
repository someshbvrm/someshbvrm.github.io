import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import profile from '../data/profile.js';
import skills from '../data/skills.js';

export default function Skills() {
  return (
    <section className="section section-alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title={profile.sections.skills.title}
          id="skills-title"
          lead={profile.sections.skills.lead}
        />

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} className={`card skill-card accent-${group.accent || 'cyan'}`} delay={(i % 4) * 70}>
              <div className="skill-card-head">
                <span className="icon-tile">
                  <Icon name={group.icon} size={22} />
                </span>
                <div>
                  <h3>{group.category}</h3>
                  {group.description ? <p className="skill-desc">{group.description}</p> : null}
                </div>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
