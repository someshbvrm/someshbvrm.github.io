import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import profile from '../data/profile.js';
import certifications from '../data/certifications.js';

/** Microsoft four-square mark drawn in SVG (shown for provider "Microsoft"). */
function ProviderMark({ provider }) {
  if (provider?.toLowerCase() === 'microsoft') {
    return (
      <svg className="ms-mark" viewBox="0 0 22 22" aria-hidden="true">
        <rect x="0" y="0" width="10" height="10" fill="#F25022" />
        <rect x="12" y="0" width="10" height="10" fill="#7FBA00" />
        <rect x="0" y="12" width="10" height="10" fill="#00A4EF" />
        <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
      </svg>
    );
  }
  return <Icon name="award" size={20} />;
}

export default function Certifications() {
  return (
    <section className="section" id="certifications" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="Certifications"
          title={profile.sections.certifications.title}
          id="certifications-title"
          lead={profile.sections.certifications.lead}
        />

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal
              key={`${c.code}-${c.name}`}
              as="article"
              className={`card cert-card level-${(c.level || 'other').toLowerCase()} ${c.featured ? 'is-featured' : ''}`}
              delay={(i % 3) * 70}
            >
              <div className="cert-badge" aria-hidden="true">
                <span className="cert-code">{c.code}</span>
              </div>
              <div className="cert-body">
                <p className="cert-provider">
                  <ProviderMark provider={c.provider} />
                  {c.provider} Certified
                </p>
                <h3 className="cert-name">{c.name}</h3>
                <div className="cert-foot">
                  {c.level ? <span className="badge">{c.level}</span> : null}
                  {c.credentialUrl ? (
                    <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                      Verify <Icon name="external" size={14} />
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
