/**
 * CERTIFICATIONS — certification cards.
 *
 * To add a certification: copy one { ... } line, paste it into the list, and edit it.
 * - "code" is the exam/credential code shown on the badge (e.g. 'DP-700').
 * - "level" is shown as a small label: 'Fundamentals', 'Associate' or 'Expert'.
 * - "credentialUrl" is your verification link (Microsoft Learn or Credly).
 *   Leave it as '' and the "Verify" button is hidden automatically.
 * - "featured: true" highlights the card.
 */

const certifications = [
  {
    name: 'Fabric Data Engineer Associate',
    code: 'DP-700',
    provider: 'Microsoft',
    level: 'Associate',
    featured: true,
    credentialUrl: '',
  },
  {
    name: 'Azure Solutions Architect Expert',
    code: 'AZ-305',
    provider: 'Microsoft',
    level: 'Expert',
    featured: false,
    credentialUrl: '',
  },
  {
    name: 'DevOps Engineer Expert',
    code: 'AZ-400',
    provider: 'Microsoft',
    level: 'Expert',
    featured: false,
    credentialUrl: '',
  },
  {
    name: 'Azure Administrator Associate',
    code: 'AZ-104',
    provider: 'Microsoft',
    level: 'Associate',
    featured: false,
    credentialUrl: '',
  },
  {
    name: 'Azure Fundamentals',
    code: 'AZ-900',
    provider: 'Microsoft',
    level: 'Fundamentals',
    featured: false,
    credentialUrl: '',
  },
  {
    name: 'Azure AI Fundamentals',
    code: 'AI-900',
    provider: 'Microsoft',
    level: 'Fundamentals',
    featured: false,
    credentialUrl: '',
  },
];

export default certifications;
