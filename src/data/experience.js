/**
 * EXPERIENCE — employment history, newest first.
 *
 * To add a new job: copy one { ... } block, paste it at the TOP of the list, and edit it.
 * - "current: true" shows a "Current" badge.
 * - "highlights" are the bullet points.
 * - "technologies" are the small tags under the bullets.
 */

const experience = [
  {
    role: 'Azure Data Engineer',
    period: 'Dec 2021 – Present',
    location: 'Bengaluru (Remote)',
    current: true,
    summary:
      'Building Microsoft Fabric and Azure data platforms end to end — ingestion, Lakehouse modeling, performance tuning, CI/CD and operations.',
    highlights: [
      'Build Microsoft Fabric Lakehouse and Warehouse solutions on OneLake for 3 business domains, organizing 150+ Delta tables into Bronze, Silver and Gold layers.',
      'Develop 25+ Fabric Data Factory pipelines and Dataflows Gen2 to ingest data from Azure SQL Database, ADLS Gen2, files and REST APIs into Fabric Lakehouses.',
      'Write PySpark and Spark SQL notebooks in Fabric that cleanse, deduplicate, join and aggregate 50M+ rows daily, loading curated tables into the Fabric Warehouse for reporting.',
      'Configured Fabric workspace roles, item permissions and Lakehouse SQL analytics endpoints, giving 4 reporting teams secure, read-only access to curated data.',
      'Rebuilt 15+ Azure Data Factory pipelines in Fabric Data Factory and used OneLake shortcuts to reference existing ADLS Gen2 data without duplicating storage.',
      'Designed a metadata-driven, parameterized ADF framework that loads 200+ source tables, cutting new-source onboarding from 2–3 days to under 4 hours.',
      'Developed Azure Databricks PySpark notebooks for 10+ source systems, using Delta Lake MERGE for upserts, schema enforcement and time travel for auditing.',
      'Implemented incremental loading with watermark columns and change tracking, replacing full reloads and reducing nightly batch run time by about 40%.',
      'Built 20+ star-schema fact and dimension tables loaded into Azure Synapse dedicated SQL pools and Azure SQL Database for downstream reporting.',
      'Integrated 8 REST APIs in ADF and Databricks — authentication, pagination and JSON flattening — with credentials stored in Azure Key Vault.',
      'Tuned Spark jobs with partitioning, broadcast joins, caching and Delta OPTIMIZE / Z-ORDER, improving run times by 30–50%.',
      'Set up Azure DevOps CI/CD for ADF, Databricks and Fabric artifacts across 3 environments, cutting deployment time from hours to under 30 minutes.',
      'Built Azure Synapse pipelines and serverless SQL views over ADLS Gen2 Parquet and Delta files for ad hoc analysis and downstream consumption.',
      'Added data quality checks for nulls, duplicates, referential integrity and row counts, reducing data issues reported by downstream teams by about 30%.',
      'Monitor 100+ daily pipeline runs with failure alerts and retry logic, maintaining a 99%+ pipeline success rate.',
      'Work with business analysts and reporting teams on data requirements, and document pipeline designs, data mappings and runbooks.',
    ],
    technologies: [
      'Microsoft Fabric',
      'OneLake',
      'Azure Data Factory',
      'Azure Databricks',
      'PySpark',
      'Spark SQL',
      'Delta Lake',
      'Azure Synapse',
      'ADLS Gen2',
      'Azure SQL Database',
      'Azure Key Vault',
      'Azure DevOps',
    ],
  },
  {
    role: 'Senior Cloud Engineer',
    period: 'Mar 2021 – Nov 2021',
    location: 'Bengaluru',
    current: false,
    summary:
      'Built batch ingestion on Azure Data Factory and organized the data lake into raw, staging and curated zones.',
    highlights: [
      'Developed 30+ Azure Data Factory pipelines with Copy, Lookup, ForEach and Stored Procedure activities to move data from 10+ on-premises and cloud sources into ADLS Gen2.',
      'Configured linked services, datasets, integration runtimes and schedule- and event-based triggers for batch data ingestion.',
      'Loaded raw files from ADLS Gen2 into 50+ staging and target tables in Azure SQL Database, applying T-SQL transformations through stored procedures.',
      'Organized the data lake into raw, staging and curated zones with consistent folder structures and file formats (CSV, JSON, Parquet).',
      'Wrote PySpark notebooks in Azure Databricks for data cleansing, type conversion and basic transformations ahead of the curation layer.',
      'Used Azure Key Vault to store connection strings and secrets referenced by ADF linked services.',
      'Connected ADF to Git (Azure Repos) for source control, and resolved failed activities and data mismatches to keep daily loads on schedule.',
      'Documented pipeline designs and source-to-target mappings for 30+ pipelines to support testing, handover and maintenance.',
    ],
    technologies: [
      'Azure Data Factory',
      'ADLS Gen2',
      'Azure SQL Database',
      'Azure Databricks',
      'PySpark',
      'T-SQL',
      'Azure Key Vault',
      'Azure Repos',
    ],
  },
  {
    role: 'SQL Developer',
    period: 'Aug 2017 – Jul 2020',
    location: 'Hyderabad',
    current: false,
    summary:
      'Built the SQL foundation: database objects, reporting queries and query performance tuning.',
    highlights: [
      'Wrote and maintained 150+ T-SQL stored procedures, views and user-defined functions supporting application features and business reports.',
      'Created and modified tables, keys, constraints and indexes based on application and reporting requirements.',
      'Prepared data for business users with joins, subqueries, common table expressions (CTEs) and window functions.',
      'Analyzed execution plans and improved slow queries through indexing and query rewrites, cutting report run times by up to 60%.',
      'Validated and reconciled data across 20+ source and target tables after each load to confirm accuracy.',
      'Built 25+ scheduled SQL data extracts and summary reports for business and operations teams.',
      'Supported unit testing, production fixes and deployment of database scripts across development, test and production.',
    ],
    technologies: ['T-SQL', 'Stored Procedures', 'Indexing', 'Query Tuning', 'CTEs', 'Window Functions'],
  },
];

export default experience;
