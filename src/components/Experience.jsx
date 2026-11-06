import { useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import profile from '../data/profile.js';
import experience from '../data/experience.js';

const VISIBLE_BULLETS = 6;

function ExperienceItem({ job, index }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = job.highlights.length > VISIBLE_BULLETS;
  const bullets = expanded ? job.highlights : job.highlights.slice(0, VISIBLE_BULLETS);
  const listId = `exp-list-${index}`;

  return (
    <Reveal as="li" className="timeline-item" delay={index * 60}>
      <span className={`timeline-node ${job.current ? 'is-current' : ''}`} aria-hidden="true" />
      <article className="card timeline-card">
        <header className="timeline-head">
          <div>
            <h3 className="timeline-role">{job.role}</h3>
            <p className="timeline-company">
              <Icon name="briefcase" size={16} /> {job.company}
            </p>
          </div>
          <div className="timeline-meta">
            {job.current ? <span className="badge badge-live">Current</span> : null}
            <span className="timeline-period">
              <Icon name="calendar" size={15} /> {job.period}
            </span>
            {job.location ? (
              <span className="timeline-location">
                <Icon name="mapPin" size={15} /> {job.location}
              </span>
            ) : null}
          </div>
        </header>

        {job.summary ? <p className="timeline-summary">{job.summary}</p> : null}

        <ul className="timeline-bullets" id={listId}>
          {bullets.map((h) => (
            <li key={h}>
              <Icon name="check" size={16} strokeWidth={2.4} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <button
            type="button"
            className="link-btn"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Show less' : `Show all ${job.highlights.length} contributions`}
          </button>
        ) : null}

        {job.technologies?.length ? (
          <ul className="tag-list" aria-label="Technologies used">
            {job.technologies.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title={profile.sections.experience.title}
          id="experience-title"
          lead={profile.sections.experience.lead}
        />
        <ol className="timeline">
          {experience.map((job, i) => (
            <ExperienceItem key={`${job.company}-${job.period}`} job={job} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
