/**
 * PROJECTS — project cards.
 *
 * To add a project: copy the { ... } block below, paste it into the list, and edit it.
 * - "repo" is the GitHub link (leave it as '' if there is no public repository).
 * - "live" is an optional demo link (leave '' if none).
 * - "featured: true" gives the card a highlighted style.
 * Only add projects that are real — every repository link should open.
 */

const projects = [
  {
    title: 'Microsoft Fabric Retail Analytics',
    featured: true,
    overview:
      'An end-to-end Microsoft Fabric analytics project for a retail scenario, taking raw customer, product and sales data through a medallion Lakehouse to Power BI.',
    problem:
      'A retail business needs a single analytics platform for customer, product and sales data, with trustworthy, validated numbers for reporting.',
    solution:
      'Raw CSV files land in OneLake and are processed by PySpark notebooks into Bronze, Silver and Gold Delta tables, with a dedicated data-quality step. A Data Factory pipeline orchestrates the flow, the Gold star schema is exposed through the SQL analytics endpoint and a Direct Lake semantic model for Power BI, with GitHub-based CI/CD.',
    technologies: [
      'Microsoft Fabric',
      'OneLake',
      'Lakehouse',
      'PySpark',
      'Delta Lake',
      'Data Factory',
      'SQL Analytics Endpoint',
      'Direct Lake',
      'Power BI',
      'GitHub',
    ],
    repo: 'https://github.com/someshbvrm/microsoft-fabric-retail-analytics',
    live: '',
  },
];

export default projects;
