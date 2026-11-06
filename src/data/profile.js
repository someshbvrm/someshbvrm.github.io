/**
 * PROFILE — your personal and professional information.
 *
 * Everything shown in the Hero and About (Professional Summary) sections
 * comes from this file. Edit the text between the quotes and save.
 */

const profile = {
  // Full name as it should appear on the website
  name: 'Someswara Rao K V',

  // Short name / initials used in the navigation logo and favicon text
  initials: 'SK',

  // Main professional title (shown under your name)
  designation: 'Microsoft Fabric Engineer & Azure Data Engineer',

  // Big headline in the hero section
  headline: 'Building reliable, scalable data platforms on Azure and Microsoft Fabric.',

  // Short 2–3 line introduction under the headline
  intro:
    'Azure Data Engineer with 8.8 years of IT experience, designing end-to-end ETL/ELT pipelines, Lakehouse architectures and governed data products across Azure and Microsoft Fabric.',

  // Where you are based and how you work
  location: 'Bengaluru, India',
  workMode: 'Open to remote',

  // Total years of experience (shown as a highlight in the hero)
  yearsOfExperience: '8.8',

  // Key technology highlights shown as chips in the hero
  highlights: [
    'Microsoft Fabric',
    'Azure Data Factory',
    'Azure Databricks',
    'PySpark',
    'Delta Lake',
    'Azure Synapse',
    'T-SQL',
    'Azure DevOps CI/CD',
  ],

  // Headline numbers under the hero. "value" is the big number, "label" the caption.
  // (The certification count is added automatically from certifications.js.)
  stats: [
    { value: '5.8', suffix: 'yrs', label: 'Hands-on Azure data engineering' },
    { value: '2', suffix: 'yrs', label: 'Building on Microsoft Fabric' },
    { value: '100', suffix: '+', label: 'Production data pipelines delivered' },
  ],

  // Professional summary paragraphs (About section)
  summary: [
    'I am an Azure Data Engineer with 8.8 years of IT experience, including 5.8 years of hands-on Azure data engineering and 2 years building solutions on Microsoft Fabric. I have delivered 100+ production data pipelines across Azure and Fabric.',
    'I started my career as a SQL Developer, which gave me a strong foundation in T-SQL, data modeling and query tuning. Today I design and build end-to-end ETL/ELT pipelines with Azure Data Factory, Azure Databricks, PySpark and Delta Lake, and develop Fabric Lakehouse and Warehouse solutions on OneLake using Fabric Data Factory pipelines and Spark notebooks.',
    'My work spans incremental data loading, Lakehouse (medallion) architecture, REST API integration, CI/CD with Azure DevOps, and pipeline monitoring and performance optimization. I hold the DP-700 Microsoft Certified: Fabric Data Engineer Associate credential.',
  ],

  // Focus-area cards in the About section. "icon" must be a name from src/components/Icon.jsx
  focusAreas: [
    {
      icon: 'layers',
      title: 'Lakehouse & Medallion Architecture',
      text: 'Fabric Lakehouse and Warehouse solutions on OneLake with Bronze, Silver and Gold layers of Delta tables.',
    },
    {
      icon: 'workflow',
      title: 'Metadata-Driven Pipelines',
      text: 'Parameterized ADF and Fabric Data Factory frameworks with incremental, watermark-based loading.',
    },
    {
      icon: 'zap',
      title: 'Spark Performance Tuning',
      text: 'Partitioning, broadcast joins, caching and Delta OPTIMIZE / Z-ORDER for faster, cheaper jobs.',
    },
    {
      icon: 'git',
      title: 'CI/CD & Operations',
      text: 'Azure DevOps release pipelines across environments, with monitoring, alerting and retry logic.',
    },
  ],

  // Section headings and the short line under each heading
  sections: {
    about: { title: 'Professional Summary', lead: '' },
    skills: {
      title: 'Technical Skills',
      lead: 'The platforms, languages and practices I use to design, build and run production data pipelines.',
    },
    experience: {
      title: 'Professional Experience',
      lead: 'From SQL development to cloud data engineering on Azure and Microsoft Fabric.',
    },
    projects: { title: 'Featured Projects', lead: 'Hands-on work with public source code.' },
    certifications: {
      title: 'Certifications',
      lead: 'Microsoft certifications across data engineering, architecture, DevOps and AI.',
    },
    education: { title: 'Education', lead: '' },
    contact: {
      title: "Let's build your next data platform",
      lead: 'Open to data engineering opportunities. The quickest way to reach me is email or LinkedIn.',
    },
  },

  // Caption for the certification count shown under the hero
  certificationStatLabel: 'Microsoft certifications',

  // Resume PDF file name inside the /public folder,
  // and the file name visitors get when they download it
  resumeFile: 'Somesh_Resume.pdf',
  resumeDownloadName: 'Someswara_Rao_KV_Resume.pdf',

  // Website / SEO settings
  siteUrl: 'https://someshbvrm.github.io',
  seoTitle: 'Someswara Rao K V | Microsoft Fabric & Azure Data Engineer',
  seoDescription:
    'Portfolio of Someswara Rao K V — Azure Data Engineer with 8.8 years of IT experience in Microsoft Fabric, Azure Data Factory, Azure Databricks, PySpark, Delta Lake, Synapse and SQL. DP-700 certified.',
  seoKeywords: [
    'Azure Data Engineer',
    'Microsoft Fabric Engineer',
    'Fabric Data Engineer',
    'Azure Data Factory',
    'Azure Databricks',
    'PySpark',
    'Delta Lake',
    'Azure Synapse Analytics',
    'Lakehouse',
    'Medallion Architecture',
    'T-SQL',
    'DP-700',
    'Bengaluru',
  ],
};

export default profile;
