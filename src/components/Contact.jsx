import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import profile from '../data/profile.js';
import socialLinks from '../data/socialLinks.js';
import { resumeUrl } from '../utils/resume.js';

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          title={profile.sections.contact.title}
          id="contact-title"
          lead={profile.sections.contact.lead}
        />

        <Reveal className="contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-main">
            <a href={`mailto:${socialLinks.email}`} className="contact-email">
              <Icon name="mail" size={22} />
              <span>{socialLinks.email}</span>
            </a>
            <p className="contact-location">
              <Icon name="mapPin" size={16} /> {profile.location} · {profile.workMode}
            </p>
            <div className="contact-actions">
              <a href={`mailto:${socialLinks.email}`} className="btn btn-primary">
                <Icon name="send" size={18} /> Send an Email
              </a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Icon name="external" size={18} /> View Resume
              </a>
            </div>
          </div>

          <ul className="contact-links">
            {socialLinks.links.map((l) => {
              const external = l.url.startsWith('http');
              return (
                <li key={l.label}>
                  <a
                    href={l.url}
                    className="contact-link"
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="icon-tile">
                      <Icon name={l.icon} size={20} />
                    </span>
                    <span className="contact-link-text">
                      <span className="contact-link-label">{l.label}</span>
                      <span className="contact-link-handle">{l.handle}</span>
                    </span>
                    <Icon name={external ? 'external' : 'arrowRight'} size={16} className="contact-link-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
