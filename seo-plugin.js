/**
 * Small Vite plugin that fills the SEO placeholders (%%TITLE%%, %%DESCRIPTION%% ...)
 * in index.html using src/data/profile.js and src/data/socialLinks.js.
 * You never need to edit index.html to change your name or description.
 */
import profile from './src/data/profile.js';
import socialLinks from './src/data/socialLinks.js';

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export function buildSeoValues() {
  const url = profile.siteUrl.replace(/\/$/, '');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.designation,
    description: profile.seoDescription,
    url,
    email: `mailto:${socialLinks.email}`,
    address: { '@type': 'PostalAddress', addressLocality: profile.location },
    sameAs: [socialLinks.linkedin, socialLinks.github].filter(Boolean),
    knowsAbout: profile.seoKeywords,
  };

  return {
    TITLE: escapeHtml(profile.seoTitle),
    DESCRIPTION: escapeHtml(profile.seoDescription),
    KEYWORDS: escapeHtml(profile.seoKeywords.join(', ')),
    NAME: escapeHtml(profile.name),
    URL: escapeHtml(url),
    JSONLD: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
  };
}

export function fillSeoPlaceholders(html) {
  const values = buildSeoValues();
  return html.replace(/%%([A-Z]+)%%/g, (match, key) => (key in values ? values[key] : match));
}

export default function seoPlugin() {
  return {
    name: 'portfolio-seo',
    transformIndexHtml(html) {
      return fillSeoPlaceholders(html);
    },
  };
}
