import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import profile from '../data/profile.js';
import projects from '../data/projects.js';
import socialLinks from '../data/socialLinks.js';

export default function Projects() {
  if (!projects.length) return null;

  return (
    <section className="section section-alt" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Projects"
          title={profile.sections.projects.title}
          id="projects-title"
          lead={profile.sections.projects.lead}
        />

        <div className={`projects-grid ${projects.length === 1 ? 'is-single' : ''}`}>
          {projects.map((p, i) => (
            <Reveal key={p.title} as="article" className={`card project-card ${p.featured ? 'is-featured' : ''}`} delay={i * 80}>
              <header className="project-head">
                <span className="icon-tile">
                  <Icon name="folder" size={22} />
                </span>
                <div className="project-links">
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`${p.title} source code on GitHub`}>
                      <Icon name="github" size={19} />
                    </a>
                  ) : null}
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`${p.title} live demo`}>
                      <Icon name="external" size={19} />
                    </a>
                  ) : null}
                </div>
              </header>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-overview">{p.overview}</p>

              <div className="project-detail">
                {p.problem ? (
                  <div>
                    <h4>Problem</h4>
                    <p>{p.problem}</p>
                  </div>
                ) : null}
                {p.solution ? (
                  <div>
                    <h4>Solution</h4>
                    <p>{p.solution}</p>
                  </div>
                ) : null}
              </div>

              <ul className="tag-list" aria-label="Technologies used">
                {p.technologies.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>

              {p.repo ? (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm project-cta">
                  <Icon name="github" size={16} /> View repository <Icon name="arrowRight" size={16} />
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-more">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
            More on GitHub <Icon name="arrowRight" size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
