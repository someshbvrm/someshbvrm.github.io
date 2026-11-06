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
    title: 'Metadata-Driven Lakehouse Framework',
    featured: true,
    overview:
      'A reusable PySpark + Delta Lake framework where one YAML file drives every table: incremental loads, SCD Type 1 and Type 2 merges, data-quality quarantine and a full audit log. Runs on Databricks, Microsoft Fabric or locally.',
    problem:
      'Writing a new notebook for every source table leads to duplicated logic, inconsistent history handling and loads that are hard to audit or re-run safely.',
    solution:
      'Tables are declared in YAML (keys, schema, watermark, load type, quality rules). The engine type-casts and validates rows, skips already-processed data with Delta-stored watermarks, de-duplicates, quarantines rows that break rules, and applies a single Delta MERGE per table (SCD1, SCD2 or insert-only). Every run is recorded in an audit table, and CI runs the full pipeline on Spark and publishes the results.',
    technologies: [
      'PySpark',
      'Delta Lake',
      'SCD Type 2',
      'MERGE',
      'Data Quality',
      'Microsoft Fabric',
      'Databricks',
      'YAML',
      'pytest',
      'GitHub Actions',
    ],
    repo: 'https://github.com/someshbvrm/metadata-driven-lakehouse-framework',
    live: 'https://someshbvrm.github.io/metadata-driven-lakehouse-framework/',
  },
  {
    title: 'ADF to Microsoft Fabric Migration Toolkit',
    featured: false,
    overview:
      'A Python command-line tool that assesses an Azure Data Factory for Microsoft Fabric and generates draft Fabric pipeline definitions.',
    problem:
      'Teams moving from Azure Data Factory to Fabric need to know what migrates as-is, what needs rework, what blocks the move, and in which order pipelines can be cut over.',
    solution:
      'Reads an ARM template export or Git-integrated factory and scores every activity, linked service, trigger and integration runtime against a Fabric compatibility catalogue. It plans dependency-aware migration waves from the Execute Pipeline call graph, estimates effort, and converts pipelines to draft Fabric JSON with datasets inlined and parameters substituted. CI publishes the assessment of a 7-pipeline sample factory as a live report.',
    technologies: [
      'Azure Data Factory',
      'Microsoft Fabric',
      'Data Factory pipelines',
      'Python',
      'ARM templates',
      'pytest',
      'GitHub Actions',
    ],
    repo: 'https://github.com/someshbvrm/adf-to-fabric-migration-toolkit',
    live: 'https://someshbvrm.github.io/adf-to-fabric-migration-toolkit/',
  },
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
