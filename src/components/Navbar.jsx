import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import navigation from '../config/navigation.js';
import profile from '../data/profile.js';
import { resumeUrl } from '../utils/resume.js';
import { openResume } from './ResumeViewer.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape and lock scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.classList.toggle('menu-open', open);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container nav-inner" aria-label="Primary">
        <a href="#top" className="brand" onClick={() => setOpen(false)} aria-label={`${profile.name} — back to top`}>
          <span className="brand-mark" aria-hidden="true">{profile.initials}</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <ul className={`nav-links ${open ? 'is-open' : ''}`} id="nav-menu">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : ''}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a
              href={resumeUrl}
              onClick={(e) => {
                setOpen(false);
                openResume(e);
              }}
              className="btn btn-primary btn-block"
            >
              <Icon name="external" size={18} /> View Resume
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href={resumeUrl} onClick={openResume} className="btn btn-ghost btn-sm nav-resume">
            <Icon name="external" size={16} /> Resume
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
