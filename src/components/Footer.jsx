import Icon from './Icon.jsx';
import profile from '../data/profile.js';
import socialLinks from '../data/socialLinks.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">{profile.initials}</span>
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-role">{profile.designation}</p>
          </div>
        </div>

        <ul className="footer-social">
          {socialLinks.links.map((l) => {
            const external = l.url.startsWith('http');
            return (
              <li key={l.label}>
                <a
                  href={l.url}
                  className="icon-btn"
                  aria-label={l.label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon name={l.icon} size={18} />
                </a>
              </li>
            );
          })}
        </ul>

        <a href="#top" className="back-to-top" aria-label="Back to top">
          <Icon name="arrowUp" size={18} /> Back to top
        </a>
      </div>
      <div className="container footer-bottom">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
