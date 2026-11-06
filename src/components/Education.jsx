import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import profile from '../data/profile.js';
import education from '../data/education.js';

export default function Education() {
  return (
    <section className="section section-alt" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader index="06" eyebrow="Education" title={profile.sections.education.title} lead={profile.sections.education.lead} id="education-title" />

        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={`${e.degree}-${e.institution}`} as="article" className="card edu-card" delay={i * 80}>
              <span className="icon-tile icon-tile-lg">
                <Icon name="graduation" size={28} />
              </span>
              <div className="edu-body">
                <h3 className="edu-degree">{e.degree}</h3>
                {e.field ? <p className="edu-field">{e.field}</p> : null}
                <p className="edu-inst">{e.institution}</p>
                <div className="edu-meta">
                  {e.location ? (
                    <span>
                      <Icon name="mapPin" size={15} /> {e.location}
                    </span>
                  ) : null}
                  {e.period ? (
                    <span>
                      <Icon name="calendar" size={15} /> {e.period}
                    </span>
                  ) : null}
                </div>
              </div>
              {e.graduationYear ? (
                <div className="edu-year" aria-label={`Graduated ${e.graduationYear}`}>
                  <span>Class of</span>
                  <strong>{e.graduationYear}</strong>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
