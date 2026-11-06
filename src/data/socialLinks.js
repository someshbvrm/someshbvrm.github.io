/**
 * SOCIAL LINKS — email, LinkedIn, GitHub and any other professional links.
 *
 * These are used in the Hero, Contact section and Footer.
 * To add another link (e.g. a blog), copy one entry and change the values.
 * "icon" must be a name from src/components/Icon.jsx (mail, linkedin, github, globe, youtube ...).
 */

const socialLinks = {
  email: 'someshjmd@gmail.com',
  linkedin: 'https://www.linkedin.com/in/someshkv',
  github: 'https://github.com/someshbvrm',

  // Every link in this list is shown as an icon/button in the Contact section and Footer.
  links: [
    { label: 'Email', handle: 'someshjmd@gmail.com', url: 'mailto:someshjmd@gmail.com', icon: 'mail' },
    { label: 'LinkedIn', handle: 'linkedin.com/in/someshkv', url: 'https://www.linkedin.com/in/someshkv', icon: 'linkedin' },
    { label: 'GitHub', handle: 'github.com/someshbvrm', url: 'https://github.com/someshbvrm', icon: 'github' },
  ],
};

export default socialLinks;
