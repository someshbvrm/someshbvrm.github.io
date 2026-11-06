/**
 * SKILLS — technical skills grouped into categories.
 *
 * To add a skill: find the right category and add a new text item to its "skills" list.
 *   skills: ['Azure Data Factory', 'Your New Skill'],
 *
 * To add a whole category: copy one { ... } block, paste it at the end of the list, and edit it.
 * "icon" must be a name from src/components/Icon.jsx.
 * "accent" is one of: 'cyan', 'violet', 'blue', 'emerald', 'amber', 'pink'.
 */

const skills = [
  {
    category: 'Cloud Platforms',
    icon: 'cloud',
    accent: 'blue',
    description: 'Microsoft Azure data services',
    skills: [
      'Azure Data Factory (ADF)',
      'Azure Databricks',
      'Azure Synapse Analytics',
      'Azure Data Lake Storage Gen2',
      'Azure SQL Database',
      'Azure Key Vault',
    ],
  },
  {
    category: 'Data Platforms',
    icon: 'layers',
    accent: 'cyan',
    description: 'Microsoft Fabric and Lakehouse',
    skills: [
      'Microsoft Fabric',
      'OneLake',
      'Fabric Lakehouse',
      'Fabric Warehouse',
      'Fabric Data Factory',
      'Dataflows Gen2',
      'OneLake shortcuts',
      'Delta Lake',
    ],
  },
  {
    category: 'Data Engineering',
    icon: 'workflow',
    accent: 'violet',
    description: 'Pipelines, processing and quality',
    skills: [
      'ETL / ELT pipelines',
      'Apache Spark',
      'Spark SQL',
      'Incremental data loading',
      'Change data capture (watermark-based)',
      'Metadata-driven frameworks',
      'Data quality checks',
      'Data integration & transformation',
    ],
  },
  {
    category: 'Programming Languages',
    icon: 'code',
    accent: 'emerald',
    description: 'Languages and querying',
    skills: ['Python', 'PySpark', 'SQL', 'T-SQL'],
  },
  {
    category: 'Databases',
    icon: 'database',
    accent: 'amber',
    description: 'Relational and analytical stores',
    skills: [
      'Azure SQL Database',
      'Azure Synapse dedicated SQL pools',
      'Synapse serverless SQL',
      'Stored procedures, views & functions',
      'Indexing & query tuning',
    ],
  },
  {
    category: 'Data Modeling & Analytics',
    icon: 'chart',
    accent: 'pink',
    description: 'Serving data for reporting',
    skills: [
      'Data warehousing',
      'Star schema',
      'Fact & dimension tables',
      'Medallion architecture (Bronze, Silver, Gold)',
      'Lakehouse SQL analytics endpoints',
    ],
  },
  {
    category: 'DevOps & Automation',
    icon: 'git',
    accent: 'blue',
    description: 'Version control and release',
    skills: [
      'Azure DevOps',
      'CI/CD pipelines',
      'Azure Repos',
      'Git',
      'Branching & pull requests',
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: 'wrench',
    accent: 'cyan',
    description: 'Integration and operations',
    skills: [
      'REST API integration',
      'JSON',
      'Parquet',
      'CSV',
      'Pipeline monitoring & alerting',
      'Troubleshooting',
      'Performance optimization',
    ],
  },
];

export default skills;
