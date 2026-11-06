# Someswara Rao K V — Portfolio

Personal portfolio website for **Someswara Rao K V**, Microsoft Fabric & Azure Data Engineer.

**Live site:** https://someshbvrm.github.io

Built with **React 19 + Vite**, plain CSS and a small built-in icon set. Deployed automatically to **GitHub Pages** by GitHub Actions every time you push to the `main` branch.

---

## The golden rule

> **All content lives in `src/data/`.**
> To change what the website says, edit a file in `src/data/` — you never need to touch the components (`src/components/`) or the CSS.

New entries automatically appear on the website using the existing card designs.

---

## Folder structure

```text
someshbvrm.github.io/
├── .github/workflows/deploy.yml   ← builds & deploys the site on every push to main
├── public/                        ← files copied as-is to the website
│   ├── Somesh_Resume.pdf             ← the resume people download
│   ├── og-image.jpg                  ← preview image for LinkedIn / WhatsApp shares
│   ├── favicon.svg, apple-touch-icon.png
│   └── robots.txt, sitemap.xml
├── src/
│   ├── components/                ← React UI components (layout & design only)
│   │   ├── Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx  Experience.jsx
│   │   ├── Projects.jsx  Certifications.jsx  Education.jsx  Contact.jsx  Footer.jsx
│   │   └── Icon.jsx  Reveal.jsx  SectionHeader.jsx  PipelineVisual.jsx  (helpers)
│   ├── data/                      ← ✏️  ALL WEBSITE CONTENT — edit these
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   ├── education.js
│   │   └── socialLinks.js
│   ├── config/navigation.js       ← menu items (only if you add/remove a section)
│   ├── utils/resume.js            ← builds the resume download link
│   ├── assets/                    ← images you import into components
│   ├── App.jsx                    ← page order of sections
│   ├── main.jsx                   ← app entry point
│   └── index.css                  ← all styling (colors, spacing, layout)
├── index.html                     ← page shell; SEO tags are filled from profile.js
├── seo-plugin.js                  ← fills index.html SEO tags at build time
├── vite.config.js
└── package.json
```

---

## What each `src/data/` file controls

| File | What it controls | Where it shows |
|---|---|---|
| `profile.js` | Name, designation, headline, intro, years of experience, stats, summary, focus areas, location, resume file name, SEO title/description/keywords | Hero, About, page title & link previews |
| `skills.js` | Skill categories and the skills inside them | Technical Skills |
| `experience.js` | Jobs: company, role, dates, bullet points, technologies | Professional Experience timeline |
| `projects.js` | Project cards: overview, problem, solution, tech, GitHub link | Projects |
| `certifications.js` | Certification cards and verification links | Certifications + the count in the hero |
| `education.js` | Degrees, institutions, years | Education |
| `socialLinks.js` | Email, LinkedIn, GitHub and any other links | Hero, Contact, Footer |

### Editing tips (no coding knowledge needed)

- Text goes between quotes: `'like this'`. If your text contains an apostrophe, use double quotes instead: `"I'm"`.
- Every item in a list ends with a comma `,`.
- Keep the `[`, `]`, `{`, `}` brackets balanced — copy an existing entry and edit it rather than typing from scratch.
- You can edit files directly on GitHub: open the file → click the ✏️ pencil → edit → **Commit changes**. The site redeploys automatically in ~1–2 minutes.

---

## Common updates

### Update professional information
Edit **`src/data/profile.js`** — e.g. change `yearsOfExperience`, `headline`, `intro`, `stats` or the `summary` paragraphs. The browser tab title and LinkedIn preview text come from `seoTitle` and `seoDescription` in the same file.

### Add a new technical skill
Open **`src/data/skills.js`**, find the category and add the skill to its list:

```js
skills: ['Azure Data Factory (ADF)', 'Azure Databricks', 'Azure Event Hubs'],
```

To add a whole new category, copy one `{ category: ..., skills: [...] }` block and edit it.
`icon` must be one of the icon names listed at the top of `src/components/Icon.jsx`; `accent` is one of `cyan`, `violet`, `blue`, `emerald`, `amber`, `pink`.

### Add a new project
Open **`src/data/projects.js`**, copy the existing block and paste it inside the list:

```js
{
  title: 'My New Project',
  featured: false,
  overview: 'One or two sentences about the project.',
  problem: 'What problem it solves.',
  solution: 'How you solved it.',
  technologies: ['PySpark', 'Delta Lake'],
  repo: 'https://github.com/someshbvrm/my-new-project',
  live: '',
},
```

With two or more projects the cards automatically switch to a two-column grid.

### Add a new certification
Open **`src/data/certifications.js`** and add a line to the list:

```js
{ name: 'Azure Data Engineer Associate', code: 'DP-203', provider: 'Microsoft', level: 'Associate', featured: false, credentialUrl: 'https://learn.microsoft.com/api/credentials/share/...' },
```

- `level` (`Fundamentals`, `Associate`, `Expert`) sets the badge color.
- Paste your Microsoft Learn or Credly share link into `credentialUrl` and a **Verify** button appears. Leave it `''` to hide the button.
- The certification count in the hero updates automatically.

### Add employment history
Open **`src/data/experience.js`** and paste a new block at the **top** of the list (newest first). Set `current: true` on your current job only. Only the first 6 bullet points are shown until the visitor clicks "Show all".

### Add education
Open **`src/data/education.js`** and copy the existing block.

### Update LinkedIn, GitHub or email
Edit **`src/data/socialLinks.js`**. Update both the top-level value (e.g. `linkedin:`) and the matching entry in `links`. To add another link (blog, YouTube), add an entry to `links` with an `icon` such as `globe` or `youtube`.

### Replace the resume PDF
1. Name your new PDF exactly `Somesh_Resume.pdf`.
2. Upload it into the `public/` folder, replacing the old one (on GitHub: open `public/` → **Add file → Upload files** → commit).

If you prefer a different file name, upload it to `public/` and change `resumeFile` in `src/data/profile.js` to match. Visitors' downloaded copy is named by `resumeDownloadName` in the same file.

---

## Run the project locally

Requires [Node.js](https://nodejs.org) 20.19 or newer.

```bash
git clone https://github.com/someshbvrm/someshbvrm.github.io.git
cd someshbvrm.github.io
npm install        # first time only
npm run dev        # open the URL it prints (usually http://localhost:5173)
```

Edits to `src/data/` files show instantly in the browser.

To test the production build: `npm run build` then `npm run preview`.

---

## Deploy changes to GitHub Pages

Deployment is fully automatic:

1. Commit and push to the `main` branch (or edit a file on github.com and commit).
2. GitHub Actions runs **Deploy portfolio to GitHub Pages** (see the **Actions** tab).
3. About 1–2 minutes later the change is live at https://someshbvrm.github.io.

If a deployment fails, open the **Actions** tab, click the failed run and read the red step — most often a missing comma or quote in a `src/data/` file.

One-time setting (already done): **Settings → Pages → Build and deployment → Source: GitHub Actions**.
