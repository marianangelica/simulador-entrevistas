/**
 * BANCO DE PREGUNTAS - Simulador Databricks Muttdata
 *
 * EDITA ESTE ARCHIVO para mantener las preguntas.
 * No necesitas modificar index.html.
 *
 * Tipos válidos (kind): experience, theory, scenario, hands-on
 */

const ROLES = [
  "Ingeniero de Datos",
  "Científico de Datos",
  "FDE / Forward Deployed Engineer",
  "Lider técnico de proyectos",
  "Arquitecto de Soluciones",
  "Analista de Datos",
  "Delivery Manager",
  "BI Analyst",
  "Ingeniero Analítico",
  "Machine Learning Engineer"
];

const BANK = {
  "Ingeniero de Datos": [
    {
      id: 1,
      role: "Ingeniero de Datos",
      topic: "Delta Lake",
      kind: "experience",
      es: "Cuéntame un caso real en el que diseñaste o mejoraste una arquitectura Medallion sobre Delta Lake. ¿Qué decisiones tomaste y qué métricas mejoraron?",
      en: "Tell me about a real case where you designed or improved a Medallion architecture on Delta Lake. What decisions did you make and which metrics improved?"
    },
    {
      id: 2,
      role: "Ingeniero de Datos",
      topic: "Lakeflow Connect",
      kind: "scenario",
      es: "Debes ingerir datos de Salesforce y PostgreSQL con cambios incrementales y el menor mantenimiento posible. ¿Cómo evaluarías Lakeflow Connect y qué validarías antes de producción?",
      en: "You need to ingest Salesforce and PostgreSQL data incrementally with minimal maintenance. How would you evaluate Lakeflow Connect and what would you validate before production?"
    },
    {
      id: 3,
      role: "Ingeniero de Datos",
      topic: "Lakeflow Pipelines",
      kind: "theory",
      es: "Explica la diferencia entre una tabla de streaming, una vista materializada y una vista dentro de Lakeflow Pipelines, y cuándo usarías cada una.",
      en: "Explain the difference between a streaming table, a materialized view, and a view in Lakeflow Pipelines, and when you would use each one."
    },
    {
      id: 4,
      role: "Ingeniero de Datos",
      topic: "Lakeflow Pipelines",
      kind: "hands-on",
      es: "Diseña verbalmente un pipeline en Lakeflow Pipelines con ingestión incremental, expectativas de calidad y manejo de registros inválidos.",
      en: "Verbally design a Lakeflow Pipelines pipeline with incremental ingestion, data quality expectations, and invalid-record handling."
    },
    {
      id: 5,
      role: "Ingeniero de Datos",
      topic: "Auto Loader",
      kind: "experience",
      es: "Describe una implementación real de Auto Loader. ¿Cómo manejaste evolución de esquema, checkpoints, archivos tardíos y re-procesos?",
      en: "Describe a real Auto Loader implementation. How did you handle schema evolution, checkpoints, late files, and reprocessing?"
    },
    {
      id: 6,
      role: "Ingeniero de Datos",
      topic: "Lakeflow Jobs",
      kind: "scenario",
      es: "Un workflow diario tiene 12 tareas, dependencias condicionales y fallas intermitentes. ¿Cómo lo modelarías en Lakeflow Jobs y cómo harías recovery?",
      en: "A daily workflow has 12 tasks, conditional dependencies, and intermittent failures. How would you model it in Lakeflow Jobs and handle recovery?"
    },
    {
      id: 7,
      role: "Ingeniero de Datos",
      topic: "Unity Catalog",
      kind: "theory",
      es: "¿Cómo usarías Unity Catalog para gobernar tablas, volúmenes, funciones y accesos entre equipos con mínimo privilegio?",
      en: "How would you use Unity Catalog to govern tables, volumes, functions, and cross-team access using least privilege?"
    },
    {
      id: 8,
      role: "Ingeniero de Datos",
      topic: "Unity Catalog",
      kind: "scenario",
      es: "Un equipo necesita aislar desarrollo, QA y producción sin duplicar controles de gobierno. Propón una estrategia de catálogos, esquemas y permisos.",
      en: "A team needs to isolate development, QA, and production without duplicating governance controls. Propose a catalog, schema, and permissions strategy."
    },
    {
      id: 9,
      role: "Ingeniero de Datos",
      topic: "Delta Lake",
      kind: "theory",
      es: "Explica OPTIMIZE, liquid clustering, data skipping, compaction y el impacto del tamaño de archivos en rendimiento.",
      en: "Explain OPTIMIZE, liquid clustering, data skipping, compaction, and the performance impact of file size."
    },
    {
      id: 10,
      role: "Ingeniero de Datos",
      topic: "Structured Streaming",
      kind: "hands-on",
      es: "Tienes un stream con eventos fuera de orden y duplicados. ¿Cómo aplicarías watermarking, deduplicación y manejo de estado?",
      en: "You have a stream with out-of-order and duplicate events. How would you apply watermarking, deduplication, and state management?"
    },
    {
      id: 11,
      role: "Ingeniero de Datos",
      topic: "CDC",
      kind: "scenario",
      es: "Una fuente entrega CDC con inserts, updates y deletes. ¿Cómo implementarías SCD Type 1 y Type 2 en Databricks?",
      en: "A source provides CDC with inserts, updates, and deletes. How would you implement SCD Type 1 and Type 2 in Databricks?"
    },
    {
      id: 12,
      role: "Ingeniero de Datos",
      topic: "Serverless",
      kind: "theory",
      es: "¿Cuándo elegirías serverless compute frente a classic compute para jobs y pipelines? Incluye seguridad, operación, compatibilidad y costo.",
      en: "When would you choose serverless compute over classic compute for jobs and pipelines? Include security, operations, compatibility, and cost."
    },
    {
      id: 13,
      role: "Ingeniero de Datos",
      topic: "System Tables",
      kind: "hands-on",
      es: "¿Qué system tables consultarías para investigar costos, fallas y duración de jobs a nivel de cuenta?",
      en: "Which system tables would you query to investigate account-level costs, failures, and job duration?"
    },
    {
      id: 14,
      role: "Ingeniero de Datos",
      topic: "Declarative Automation Bundles",
      kind: "experience",
      es: "¿Cómo has aplicado CI/CD o infraestructura como código en Databricks? Relaciónalo con Declarative Automation Bundles.",
      en: "How have you applied CI/CD or infrastructure as code in Databricks? Relate it to Declarative Automation Bundles."
    },
    {
      id: 15,
      role: "Ingeniero de Datos",
      topic: "Lakehouse Federation",
      kind: "scenario",
      es: "El negocio quiere consultar una base externa sin copiar datos. ¿Cuándo usarías Lakehouse Federation y cuándo preferirías ingerirlos?",
      en: "The business wants to query an external database without copying data. When would you use Lakehouse Federation and when would you prefer ingestion?"
    },
    {
      id: 16,
      role: "Ingeniero de Datos",
      topic: "Delta Sharing / OpenSharing",
      kind: "theory",
      es: "Explica cómo compartirías datos gobernados con otra organización y qué controles aplicarías usando Delta Sharing/OpenSharing.",
      en: "Explain how you would share governed data with another organization and what controls you would apply using Delta Sharing/OpenSharing."
    },
    {
      id: 17,
      role: "Ingeniero de Datos",
      topic: "Performance",
      kind: "scenario",
      es: "Una transformación Spark pasó de 20 minutos a 2 horas después de crecer 10 veces el volumen. ¿Cómo diagnosticarías el problema paso a paso?",
      en: "A Spark transformation went from 20 minutes to 2 hours after data volume grew 10x. How would you diagnose the issue step by step?"
    },
    {
      id: 18,
      role: "Ingeniero de Datos",
      topic: "Spark",
      kind: "theory",
      es: "Explica shuffle, particionamiento, skew, broadcast joins y AQE. ¿Cómo reconoces cada problema en una ejecución?",
      en: "Explain shuffle, partitioning, skew, broadcast joins, and AQE. How do you recognize each issue in a run?"
    },
    {
      id: 19,
      role: "Ingeniero de Datos",
      topic: "Data Quality",
      kind: "experience",
      es: "Cuéntame un caso donde una regla de calidad evitó un incidente aguas abajo. ¿Cómo definiste severidad, cuarentena y alertamiento?",
      en: "Tell me about a case where a data-quality rule prevented a downstream incident. How did you define severity, quarantine, and alerting?"
    },
    {
      id: 20,
      role: "Ingeniero de Datos",
      topic: "Architecture",
      kind: "scenario",
      es: "Diseña una plataforma de datos en Databricks para batch y streaming, con gobierno, observabilidad, CI/CD y recuperación ante fallos.",
      en: "Design a Databricks data platform for batch and streaming with governance, observability, CI/CD, and failure recovery."
    }
  ],

  "Científico de Datos": [
    {
      id: 21,
      role: "Científico de Datos",
      topic: "MLflow 3",
      kind: "experience",
      es: "Cuéntame un proyecto real en el que usaste MLflow para seguimiento de experimentos. ¿Qué registrabas y cómo elegiste el modelo final?",
      en: "Tell me about a real project where you used MLflow for experiment tracking. What did you log and how did you choose the final model?"
    },
    {
      id: 22,
      role: "Científico de Datos",
      topic: "MLflow 3",
      kind: "theory",
      es: "¿Qué cambia conceptualmente en MLflow 3 para modelos y aplicaciones GenAI respecto del tracking tradicional?",
      en: "What conceptually changes in MLflow 3 for models and GenAI applications compared with traditional tracking?"
    },
    {
      id: 23,
      role: "Científico de Datos",
      topic: "Feature Engineering",
      kind: "hands-on",
      es: "Diseña un conjunto de features en Unity Catalog evitando leakage y garantizando reproducibilidad entre training e inference.",
      en: "Design a feature set in Unity Catalog while avoiding leakage and ensuring reproducibility between training and inference."
    },
    {
      id: 24,
      role: "Científico de Datos",
      topic: "Feature Store",
      kind: "scenario",
      es: "Tu modelo online necesita features con latencia baja. ¿Cómo diseñarías el flujo desde feature tables hasta serving?",
      en: "Your online model needs low-latency features. How would you design the flow from feature tables to serving?"
    },
    {
      id: 25,
      role: "Científico de Datos",
      topic: "Model Serving",
      kind: "theory",
      es: "Compara inferencia batch y tiempo real con Model Serving. ¿Qué trade-offs considerarías?",
      en: "Compare batch and real-time inference with Model Serving. What trade-offs would you consider?"
    },
    {
      id: 26,
      role: "Científico de Datos",
      topic: "Model Serving",
      kind: "scenario",
      es: "Un endpoint tiene p95 de latencia demasiado alto y tráfico variable. ¿Cómo investigarías y qué cambios probarías?",
      en: "A serving endpoint has excessively high p95 latency and variable traffic. How would you investigate and what changes would you test?"
    },
    {
      id: 27,
      role: "Científico de Datos",
      topic: "Unity Catalog",
      kind: "theory",
      es: "¿Cómo gobierna Unity Catalog datasets, features, modelos y funciones en un flujo de ML?",
      en: "How does Unity Catalog govern datasets, features, models, and functions in an ML workflow?"
    },
    {
      id: 28,
      role: "Científico de Datos",
      topic: "Model Monitoring",
      kind: "experience",
      es: "Describe cómo has detectado drift, degradación de performance o cambios de distribución en un modelo productivo.",
      en: "Describe how you have detected drift, performance degradation, or distribution shifts in a production model."
    },
    {
      id: 29,
      role: "Científico de Datos",
      topic: "Evaluation",
      kind: "scenario",
      es: "Tienes un modelo con buen AUC pero impacto pobre en negocio. ¿Cómo replantearías la evaluación?",
      en: "You have a model with good AUC but poor business impact. How would you rethink evaluation?"
    },
    {
      id: 30,
      role: "Científico de Datos",
      topic: "Spark ML",
      kind: "theory",
      es: "¿Cuándo usarías Spark para entrenamiento o feature engineering distribuido y cuándo preferirías pandas/scikit-learn?",
      en: "When would you use Spark for distributed training or feature engineering and when would you prefer pandas/scikit-learn?"
    },
    {
      id: 31,
      role: "Científico de Datos",
      topic: "Serverless",
      kind: "scenario",
      es: "Tu equipo de ciencia de datos quiere cero administración de clusters. ¿Qué workloads moverías a serverless y qué validarías primero?",
      en: "Your data science team wants zero cluster administration. Which workloads would you move to serverless and what would you validate first?"
    },
    {
      id: 32,
      role: "Científico de Datos",
      topic: "GenAI",
      kind: "theory",
      es: "Explica RAG, embeddings, grounding, evaluación y guardrails en una aplicación GenAI empresarial.",
      en: "Explain RAG, embeddings, grounding, evaluation, and guardrails in an enterprise GenAI application."
    },
    {
      id: 33,
      role: "Científico de Datos",
      topic: "AI Search",
      kind: "hands-on",
      es: "Diseña un RAG con Databricks AI Search: fuentes, chunking, embeddings, metadatos, índice y evaluación.",
      en: "Design a RAG system with Databricks AI Search: sources, chunking, embeddings, metadata, index, and evaluation."
    },
    {
      id: 34,
      role: "Científico de Datos",
      topic: "Agents",
      kind: "scenario",
      es: "Un agente debe consultar datos estructurados y documentos y ejecutar una acción. ¿Cómo separarías herramientas, permisos y evaluación?",
      en: "An agent must query structured data and documents and execute an action. How would you separate tools, permissions, and evaluation?"
    },
    {
      id: 35,
      role: "Científico de Datos",
      topic: "MLflow 3",
      kind: "hands-on",
      es: "¿Qué información registrarías para reproducir por completo un entrenamiento seis meses después?",
      en: "What information would you log to fully reproduce a training run six months later?"
    },
    {
      id: 36,
      role: "Científico de Datos",
      topic: "Experiment Design",
      kind: "experience",
      es: "Cuéntame un caso donde un experimento offline prometía éxito pero un A/B test cambió la decisión.",
      en: "Tell me about a case where an offline experiment looked promising but an A/B test changed the decision."
    },
    {
      id: 37,
      role: "Científico de Datos",
      topic: "Data Quality",
      kind: "scenario",
      es: "Descubres que una feature crítica llega con dos días de retraso. ¿Cómo estimas impacto y proteges el modelo?",
      en: "You discover that a critical feature arrives two days late. How do you estimate impact and protect the model?"
    },
    {
      id: 38,
      role: "Científico de Datos",
      topic: "Lakebase",
      kind: "scenario",
      es: "¿En qué caso usarías Lakebase como componente operacional alrededor de una solución de ML y qué no almacenarías allí?",
      en: "In what case would you use Lakebase as an operational component around an ML solution, and what would you avoid storing there?"
    },
    {
      id: 39,
      role: "Científico de Datos",
      topic: "Cost",
      kind: "theory",
      es: "¿Cómo equilibrarías costo, frecuencia de reentrenamiento, tamaño del modelo y SLA de inferencia?",
      en: "How would you balance cost, retraining frequency, model size, and inference SLA?"
    },
    {
      id: 40,
      role: "Científico de Datos",
      topic: "MLOps",
      kind: "scenario",
      es: "Diseña un proceso MLOps completo en Databricks desde datos hasta monitoreo y rollback.",
      en: "Design a complete MLOps process in Databricks from data through monitoring and rollback."
    }
  ],

  "FDE / Forward Deployed Engineer": [
    {
      id: 41,
      role: "FDE / Forward Deployed Engineer",
      topic: "Discovery",
      kind: "experience",
      es: "Cuéntame una situación donde un cliente describió un problema ambiguo. ¿Cómo lo convertiste en requisitos técnicos verificables?",
      en: "Tell me about a situation where a customer described an ambiguous problem. How did you turn it into verifiable technical requirements?"
    },
    {
      id: 42,
      role: "FDE / Forward Deployed Engineer",
      topic: "Architecture",
      kind: "scenario",
      es: "Un cliente tiene ETL en varias herramientas, BI separado y modelos ML aislados. Diseña una ruta incremental hacia Databricks sin un big-bang.",
      en: "A customer has ETL across several tools, separate BI, and isolated ML models. Design an incremental path to Databricks without a big-bang migration."
    },
    {
      id: 43,
      role: "FDE / Forward Deployed Engineer",
      topic: "Unity Catalog",
      kind: "scenario",
      es: "El cliente exige segregación por países y datos sensibles. ¿Cómo plantearías gobierno y acceso en Unity Catalog?",
      en: "The customer requires country-level segregation and sensitive-data controls. How would you design governance and access in Unity Catalog?"
    },
    {
      id: 44,
      role: "FDE / Forward Deployed Engineer",
      topic: "Lakeflow Connect",
      kind: "theory",
      es: "¿Qué problema resuelve Lakeflow Connect y cuándo preferirías un conector administrado, uno estándar o una integración personalizada?",
      en: "What problem does Lakeflow Connect solve, and when would you prefer a managed connector, a standard connector, or a custom integration?"
    },
    {
      id: 45,
      role: "FDE / Forward Deployed Engineer",
      topic: "Lakeflow Pipelines",
      kind: "hands-on",
      es: "En una sesión con el cliente debes demostrar CDC, calidad y trazabilidad en menos de una hora. ¿Qué demo construirías?",
      en: "In a customer session you need to demonstrate CDC, quality, and traceability in under an hour. What demo would you build?"
    },
    {
      id: 46,
      role: "FDE / Forward Deployed Engineer",
      topic: "Databricks SQL",
      kind: "scenario",
      es: "Un dashboard ejecutivo tarda 40 segundos. ¿Cómo conducirías una sesión de troubleshooting sin asumir la causa?",
      en: "An executive dashboard takes 40 seconds. How would you run a troubleshooting session without assuming the root cause?"
    },
    {
      id: 47,
      role: "FDE / Forward Deployed Engineer",
      topic: "Genie",
      kind: "scenario",
      es: "El cliente quiere preguntas en lenguaje natural sobre KPIs certificados. ¿Cómo combinarías Genie, Metric Views y gobierno?",
      en: "The customer wants natural-language questions over certified KPIs. How would you combine Genie, Metric Views, and governance?"
    },
    {
      id: 48,
      role: "FDE / Forward Deployed Engineer",
      topic: "Metric Views",
      kind: "theory",
      es: "Explica a un cliente no técnico qué problema resuelven Metric Views y por qué son distintas de una vista SQL tradicional.",
      en: "Explain to a non-technical customer what problem Metric Views solve and why they differ from a traditional SQL view."
    },
    {
      id: 49,
      role: "FDE / Forward Deployed Engineer",
      topic: "AI Search",
      kind: "scenario",
      es: "Una empresa quiere búsqueda semántica sobre contratos. ¿Qué preguntas harías antes de recomendar AI Search?",
      en: "A company wants semantic search over contracts. What questions would you ask before recommending AI Search?"
    },
    {
      id: 50,
      role: "FDE / Forward Deployed Engineer",
      topic: "Lakebase",
      kind: "theory",
      es: "¿Cómo explicarías cuándo Lakebase encaja para cargas OLTP y cuándo el Lakehouse sigue siendo el sistema apropiado?",
      en: "How would you explain when Lakebase fits OLTP workloads and when the Lakehouse remains the appropriate system?"
    },
    {
      id: 51,
      role: "FDE / Forward Deployed Engineer",
      topic: "Databricks Apps",
      kind: "scenario",
      es: "Necesitas construir rápidamente una interfaz interna sobre datos gobernados. ¿Cuándo considerarías Databricks Apps y qué trade-offs explicarías?",
      en: "You need to quickly build an internal UI on governed data. When would you consider Databricks Apps and what trade-offs would you explain?"
    },
    {
      id: 52,
      role: "FDE / Forward Deployed Engineer",
      topic: "Serverless",
      kind: "theory",
      es: "¿Qué beneficios y limitaciones de serverless explicarías a un cliente preocupado por operación, red y dependencias?",
      en: "What serverless benefits and limitations would you explain to a customer concerned about operations, networking, and dependencies?"
    },
    {
      id: 53,
      role: "FDE / Forward Deployed Engineer",
      topic: "Migration",
      kind: "experience",
      es: "Describe una migración compleja que lideraste o apoyaste. ¿Cómo redujiste riesgo técnico y organizacional?",
      en: "Describe a complex migration you led or supported. How did you reduce technical and organizational risk?"
    },
    {
      id: 54,
      role: "FDE / Forward Deployed Engineer",
      topic: "POC",
      kind: "scenario",
      es: "Un POC tiene dos semanas. Define criterios de éxito, alcance, datos, riesgos y entregables para evitar que se convierta en producción accidental.",
      en: "A POC has two weeks. Define success criteria, scope, data, risks, and deliverables to prevent it from becoming accidental production."
    },
    {
      id: 55,
      role: "FDE / Forward Deployed Engineer",
      topic: "Troubleshooting",
      kind: "hands-on",
      es: "Un pipeline que funcionaba ayer falla hoy. Describe tu árbol de diagnóstico desde síntomas hasta causa raíz.",
      en: "A pipeline that worked yesterday fails today. Describe your diagnostic tree from symptoms to root cause."
    },
    {
      id: 56,
      role: "FDE / Forward Deployed Engineer",
      topic: "Cost",
      kind: "scenario",
      es: "El cliente dice que Databricks es caro. ¿Cómo separarías problema de arquitectura, configuración, uso y percepción de valor?",
      en: "The customer says Databricks is expensive. How would you separate architecture, configuration, usage, and value-perception issues?"
    },
    {
      id: 57,
      role: "FDE / Forward Deployed Engineer",
      topic: "Security",
      kind: "theory",
      es: "Explica identidad, mínimo privilegio, secretos/credenciales, lineage y auditoría en una solución empresarial de Databricks.",
      en: "Explain identity, least privilege, secrets/credentials, lineage, and auditability in an enterprise Databricks solution."
    },
    {
      id: 58,
      role: "FDE / Forward Deployed Engineer",
      topic: "Stakeholders",
      kind: "experience",
      es: "Cuéntame un caso en el que negocio y plataforma querían cosas incompatibles. ¿Cómo alcanzaste una decisión?",
      en: "Tell me about a case where business and platform teams wanted incompatible things. How did you reach a decision?"
    },
    {
      id: 59,
      role: "FDE / Forward Deployed Engineer",
      topic: "Enablement",
      kind: "scenario",
      es: "Después de entregar una solución, el cliente depende demasiado de ti. ¿Cómo diseñas transferencia de conocimiento y autonomía?",
      en: "After delivering a solution, the customer depends too heavily on you. How do you design knowledge transfer and autonomy?"
    },
    {
      id: 60,
      role: "FDE / Forward Deployed Engineer",
      topic: "Architecture",
      kind: "scenario",
      es: "Presenta una arquitectura Databricks de extremo a extremo en cinco minutos para un CTO y luego explica qué profundizarías con el equipo técnico.",
      en: "Present an end-to-end Databricks architecture in five minutes for a CTO, then explain what you would deepen with the technical team."
    }
  ],

  "Proyecto técnico": [
    {
      id: 61,
      role: "Proyecto técnico",
      topic: "Project Discovery",
      kind: "experience",
      es: "Describe el proyecto técnico más complejo que hayas ejecutado en Databricks. ¿Cuál era el objetivo, alcance, arquitectura y resultado medible?",
      en: "Describe the most complex technical project you have delivered on Databricks. What were the objective, scope, architecture, and measurable outcome?"
    },
    {
      id: 62,
      role: "Proyecto técnico",
      topic: "Architecture",
      kind: "hands-on",
      es: "Diseña una solución end-to-end que ingiera fuentes batch y streaming, transforme datos, aplique gobierno y exponga BI y ML.",
      en: "Design an end-to-end solution that ingests batch and streaming sources, transforms data, applies governance, and serves BI and ML."
    },
    {
      id: 63,
      role: "Proyecto técnico",
      topic: "Planning",
      kind: "scenario",
      es: "Tienes 12 semanas, cuatro ingenieros y dependencias externas inciertas. ¿Cómo construirías el plan y el camino crítico?",
      en: "You have 12 weeks, four engineers, and uncertain external dependencies. How would you build the plan and critical path?"
    },
    {
      id: 64,
      role: "Proyecto técnico",
      topic: "Risk",
      kind: "experience",
      es: "Cuéntame un riesgo técnico que identificaste temprano y cómo cambió tu plan de proyecto.",
      en: "Tell me about a technical risk you identified early and how it changed your project plan."
    },
    {
      id: 65,
      role: "Proyecto técnico",
      topic: "Lakeflow",
      kind: "hands-on",
      es: "Propón el diseño de ingestión y transformación usando Lakeflow Connect, Pipelines y Jobs, explicando la responsabilidad de cada componente.",
      en: "Propose an ingestion and transformation design using Lakeflow Connect, Pipelines, and Jobs, explaining each component's responsibility."
    },
    {
      id: 66,
      role: "Proyecto técnico",
      topic: "Unity Catalog",
      kind: "scenario",
      es: "Define el modelo de gobierno para múltiples dominios, equipos y ambientes usando Unity Catalog.",
      en: "Define a governance model for multiple domains, teams, and environments using Unity Catalog."
    },
    {
      id: 67,
      role: "Proyecto técnico",
      topic: "CI/CD",
      kind: "hands-on",
      es: "Explica cómo estructurarías repositorio, pruebas, promociones y rollback usando Declarative Automation Bundles.",
      en: "Explain how you would structure repository, tests, promotions, and rollback using Declarative Automation Bundles."
    },
    {
      id: 68,
      role: "Proyecto técnico",
      topic: "Data Quality",
      kind: "scenario",
      es: "El sponsor exige cero errores, pero las fuentes son inestables. ¿Cómo defines SLOs de calidad, cuarentena y escalamiento?",
      en: "The sponsor demands zero errors, but source systems are unstable. How do you define quality SLOs, quarantine, and escalation?"
    },
    {
      id: 69,
      role: "Proyecto técnico",
      topic: "Performance",
      kind: "hands-on",
      es: "Una carga crítica incumple el SLA. Explica cómo aislarías si el cuello está en lectura, shuffle, skew, joins, escritura o compute.",
      en: "A critical workload misses its SLA. Explain how you would isolate whether the bottleneck is reads, shuffle, skew, joins, writes, or compute."
    },
    {
      id: 70,
      role: "Proyecto técnico",
      topic: "Cost",
      kind: "scenario",
      es: "El presupuesto se reduce 30% a mitad del proyecto. ¿Qué optimizaciones técnicas y decisiones de alcance evaluarías?",
      en: "The budget is cut by 30% halfway through the project. What technical optimizations and scope decisions would you evaluate?"
    },
    {
      id: 71,
      role: "Proyecto técnico",
      topic: "Testing",
      kind: "theory",
      es: "¿Qué niveles de pruebas aplicarías a pipelines de datos y por qué unit tests no son suficientes?",
      en: "What testing levels would you apply to data pipelines and why are unit tests not enough?"
    },
    {
      id: 72,
      role: "Proyecto técnico",
      topic: "Observability",
      kind: "hands-on",
      es: "Diseña observabilidad para jobs, pipelines, calidad, costos y SLAs usando logs, métricas y system tables.",
      en: "Design observability for jobs, pipelines, quality, costs, and SLAs using logs, metrics, and system tables."
    },
    {
      id: 73,
      role: "Proyecto técnico",
      topic: "Security",
      kind: "scenario",
      es: "Aparece un nuevo requisito de PII dos semanas antes del go-live. ¿Cómo evaluarías impacto y qué controles implementarías?",
      en: "A new PII requirement appears two weeks before go-live. How would you assess impact and what controls would you implement?"
    },
    {
      id: 74,
      role: "Proyecto técnico",
      topic: "Delivery",
      kind: "experience",
      es: "Cuéntame una entrega que se atrasó. ¿Cómo lo comunicaste, replanificaste y evitaste repetir el problema?",
      en: "Tell me about a delivery that slipped. How did you communicate, replan, and prevent the issue from recurring?"
    },
    {
      id: 75,
      role: "Proyecto técnico",
      topic: "Stakeholders",
      kind: "scenario",
      es: "El arquitecto quiere refactorizar; negocio quiere salir esta semana. ¿Cómo facilitas la decisión con evidencia?",
      en: "The architect wants to refactor; the business wants to launch this week. How do you facilitate the decision with evidence?"
    },
    {
      id: 76,
      role: "Proyecto técnico",
      topic: "Migration",
      kind: "hands-on",
      es: "Diseña una estrategia de migración por olas desde un data warehouse legado a Databricks, con coexistencia temporal.",
      en: "Design a wave-based migration strategy from a legacy data warehouse to Databricks with temporary coexistence."
    },
    {
      id: 77,
      role: "Proyecto técnico",
      topic: "DR",
      kind: "theory",
      es: "¿Cómo definirías RPO, RTO, recuperación, idempotencia y replay para una plataforma de datos?",
      en: "How would you define RPO, RTO, recovery, idempotency, and replay for a data platform?"
    },
    {
      id: 78,
      role: "Proyecto técnico",
      topic: "Acceptance",
      kind: "scenario",
      es: "¿Qué criterios de aceptación técnicos y de negocio pondrías para declarar exitoso un proyecto Databricks?",
      en: "What technical and business acceptance criteria would you use to declare a Databricks project successful?"
    },
    {
      id: 79,
      role: "Proyecto técnico",
      topic: "Documentation",
      kind: "experience",
      es: "¿Qué documentación mínima dejas para que otro equipo opere la solución sin depender de sus autores?",
      en: "What minimum documentation do you leave so another team can operate the solution without depending on its authors?"
    },
    {
      id: 80,
      role: "Proyecto técnico",
      topic: "Executive Communication",
      kind: "scenario",
      es: "El proyecto está técnicamente sano pero el sponsor percibe poco avance. ¿Cómo replanteas reporting, demos y métricas de valor?",
      en: "The project is technically healthy but the sponsor perceives little progress. How do you reshape reporting, demos, and value metrics?"
    }
  ],

  "Arquitecto de Soluciones": [
    {
      id: 81,
      role: "Arquitecto de Soluciones",
      topic: "Architecture",
      kind: "experience",
      es: "Describe una arquitectura Databricks que hayas diseñado. ¿Qué restricciones dominaron tus decisiones?",
      en: "Describe a Databricks architecture you designed. Which constraints dominated your decisions?"
    },
    {
      id: 82,
      role: "Arquitecto de Soluciones",
      topic: "Unity Catalog",
      kind: "theory",
      es: "Diseña un modelo empresarial de Unity Catalog: metastore, catálogos, esquemas, ownership, grupos y separación de ambientes.",
      en: "Design an enterprise Unity Catalog model: metastore, catalogs, schemas, ownership, groups, and environment separation."
    },
    {
      id: 83,
      role: "Arquitecto de Soluciones",
      topic: "Lakeflow",
      kind: "scenario",
      es: "¿Cómo ubicarías Lakeflow Connect, Pipelines y Jobs en una arquitectura de referencia y qué anti-patrones evitarías?",
      en: "How would you place Lakeflow Connect, Pipelines, and Jobs in a reference architecture and what anti-patterns would you avoid?"
    },
    {
      id: 84,
      role: "Arquitecto de Soluciones",
      topic: "Lakehouse Federation",
      kind: "theory",
      es: "Compara federation, ingestion y sharing como patrones de integración de datos.",
      en: "Compare federation, ingestion, and sharing as data-integration patterns."
    },
    {
      id: 85,
      role: "Arquitecto de Soluciones",
      topic: "Delta Lake",
      kind: "theory",
      es: "Explica decisiones de diseño alrededor de tablas managed/external, particionamiento histórico, liquid clustering y mantenimiento.",
      en: "Explain design decisions around managed/external tables, legacy partitioning, liquid clustering, and maintenance."
    },
    {
      id: 86,
      role: "Arquitecto de Soluciones",
      topic: "Security",
      kind: "scenario",
      es: "Diseña una solución para PII con aislamiento, masking, row filters, auditoría y lineage.",
      en: "Design a solution for PII with isolation, masking, row filters, auditing, and lineage."
    },
    {
      id: 87,
      role: "Arquitecto de Soluciones",
      topic: "Networking",
      kind: "scenario",
      es: "Un cliente exige tráfico privado y egress controlado. ¿Qué preguntas de red y conectividad debes resolver antes del diseño final?",
      en: "A customer requires private traffic and controlled egress. What networking and connectivity questions must you resolve before the final design?"
    },
    {
      id: 88,
      role: "Arquitecto de Soluciones",
      topic: "Serverless",
      kind: "theory",
      es: "¿Cómo cambia el modelo operativo al adoptar serverless y qué incompatibilidades debes revisar?",
      en: "How does the operating model change when adopting serverless and what incompatibilities must you review?"
    },
    {
      id: 89,
      role: "Arquitecto de Soluciones",
      topic: "Databricks SQL",
      kind: "scenario",
      es: "Diseña una capa de serving para cientos de usuarios BI con concurrencia variable y KPIs gobernados.",
      en: "Design a serving layer for hundreds of BI users with variable concurrency and governed KPIs."
    },
    {
      id: 90,
      role: "Arquitecto de Soluciones",
      topic: "Metric Views",
      kind: "theory",
      es: "¿Cómo encajan Metric Views en una arquitectura semántica empresarial y qué problemas de consistencia resuelven?",
      en: "How do Metric Views fit into an enterprise semantic architecture and what consistency problems do they solve?"
    },
    {
      id: 91,
      role: "Arquitecto de Soluciones",
      topic: "Genie",
      kind: "scenario",
      es: "¿Qué prerrequisitos de modelo semántico, permisos y calidad exigirías antes de lanzar Genie a usuarios de negocio?",
      en: "What semantic-model, permissions, and quality prerequisites would you require before launching Genie to business users?"
    },
    {
      id: 92,
      role: "Arquitecto de Soluciones",
      topic: "AI Search",
      kind: "scenario",
      es: "Diseña una arquitectura RAG empresarial con AI Search, control de acceso, evaluación y observabilidad.",
      en: "Design an enterprise RAG architecture with AI Search, access control, evaluation, and observability."
    },
    {
      id: 93,
      role: "Arquitecto de Soluciones",
      topic: "Agents",
      kind: "theory",
      es: "¿Cómo gobernarías herramientas y acciones de agentes para minimizar riesgo operacional?",
      en: "How would you govern agent tools and actions to minimize operational risk?"
    },
    {
      id: 94,
      role: "Arquitecto de Soluciones",
      topic: "Lakebase",
      kind: "scenario",
      es: "Una aplicación necesita transacciones operacionales y analítica. ¿Cómo separarías Lakebase y Lakehouse y cómo sincronizarías ambos?",
      en: "An application needs operational transactions and analytics. How would you separate Lakebase and the Lakehouse and synchronize both?"
    },
    {
      id: 95,
      role: "Arquitecto de Soluciones",
      topic: "Databricks Apps",
      kind: "scenario",
      es: "¿Cuándo recomendarías una Databricks App frente a una aplicación externa y qué implicaciones de costo y ciclo de vida explicarías?",
      en: "When would you recommend a Databricks App versus an external application, and what cost and lifecycle implications would you explain?"
    },
    {
      id: 96,
      role: "Arquitecto de Soluciones",
      topic: "Multi-cloud",
      kind: "theory",
      es: "¿Qué aspectos del diseño son portables entre AWS, Azure y GCP y cuáles dependen fuertemente del cloud?",
      en: "Which design aspects are portable across AWS, Azure, and GCP and which are strongly cloud-dependent?"
    },
    {
      id: 97,
      role: "Arquitecto de Soluciones",
      topic: "DR",
      kind: "scenario",
      es: "Diseña continuidad de negocio para una plataforma crítica con objetivos explícitos de RPO y RTO.",
      en: "Design business continuity for a critical platform with explicit RPO and RTO targets."
    },
    {
      id: 98,
      role: "Arquitecto de Soluciones",
      topic: "Cost",
      kind: "scenario",
      es: "¿Cómo incorporarías FinOps desde el diseño: etiquetado, ownership, presupuestos, system tables y decisiones de compute?",
      en: "How would you incorporate FinOps from design: tagging, ownership, budgets, system tables, and compute decisions?"
    },
    {
      id: 99,
      role: "Arquitecto de Soluciones",
      topic: "Migration",
      kind: "experience",
      es: "Cuéntame una decisión de arquitectura que redujo de forma importante el riesgo de una migración.",
      en: "Tell me about an architecture decision that materially reduced migration risk."
    },
    {
      id: 100,
      role: "Arquitecto de Soluciones",
      topic: "Trade-offs",
      kind: "scenario",
      es: "Debes defender una arquitectura ante seguridad, data engineering, BI, ML y finanzas. ¿Qué artefactos y trade-offs presentarías?",
      en: "You must defend an architecture to security, data engineering, BI, ML, and finance. What artifacts and trade-offs would you present?"
    }
  ],

  "Analista de Datos": [
    {
      id: 101,
      role: "Analista de Datos",
      topic: "Databricks SQL",
      kind: "experience",
      es: "Cuéntame un análisis complejo que hayas construido en Databricks SQL y cómo validaste que el resultado era correcto.",
      en: "Tell me about a complex analysis you built in Databricks SQL and how you validated that the result was correct."
    },
    {
      id: 102,
      role: "Analista de Datos",
      topic: "SQL",
      kind: "hands-on",
      es: "¿Cómo resolverías top-N por grupo, ventanas acumuladas y comparación contra el período anterior usando funciones window?",
      en: "How would you solve top-N per group, cumulative windows, and comparison to the previous period using window functions?"
    },
    {
      id: 103,
      role: "Analista de Datos",
      topic: "Metric Views",
      kind: "theory",
      es: "¿Qué ventaja aporta una Metric View frente a repetir la lógica de KPIs en cada dashboard?",
      en: "What advantage does a Metric View provide over repeating KPI logic in every dashboard?"
    },
    {
      id: 104,
      role: "Analista de Datos",
      topic: "AI/BI Dashboards",
      kind: "scenario",
      es: "Un dashboard tiene demasiados gráficos y nadie lo usa. ¿Cómo replantearías preguntas, jerarquía y métricas?",
      en: "A dashboard has too many charts and nobody uses it. How would you rethink questions, hierarchy, and metrics?"
    },
    {
      id: 105,
      role: "Analista de Datos",
      topic: "Genie",
      kind: "scenario",
      es: "¿Cómo prepararías datos y contexto para que usuarios de negocio obtengan respuestas confiables con Genie?",
      en: "How would you prepare data and context so business users get reliable answers with Genie?"
    },
    {
      id: 106,
      role: "Analista de Datos",
      topic: "Unity Catalog",
      kind: "theory",
      es: "¿Cómo afecta Unity Catalog tu trabajo diario como analista respecto a descubrimiento, permisos y lineage?",
      en: "How does Unity Catalog affect your daily work as an analyst regarding discovery, permissions, and lineage?"
    },
    {
      id: 107,
      role: "Analista de Datos",
      topic: "Data Quality",
      kind: "experience",
      es: "Cuéntame una vez que encontraste un error de datos antes de presentar resultados. ¿Cómo lo detectaste y comunicaste?",
      en: "Tell me about a time you found a data error before presenting results. How did you detect and communicate it?"
    },
    {
      id: 108,
      role: "Analista de Datos",
      topic: "SQL Warehouse",
      kind: "theory",
      es: "¿Qué es un SQL warehouse y qué factores afectan latencia y concurrencia para usuarios analíticos?",
      en: "What is a SQL warehouse and what factors affect latency and concurrency for analytics users?"
    },
    {
      id: 109,
      role: "Analista de Datos",
      topic: "Performance",
      kind: "hands-on",
      es: "Una consulta SQL tarda 15 minutos. ¿Qué revisarías antes de pedir más compute?",
      en: "A SQL query takes 15 minutes. What would you inspect before asking for more compute?"
    },
    {
      id: 110,
      role: "Analista de Datos",
      topic: "Dimensional Modeling",
      kind: "theory",
      es: "Compara modelo estrella, tabla ancha y enfoque medallion desde el punto de vista analítico.",
      en: "Compare star schema, wide table, and medallion approaches from an analytics perspective."
    },
    {
      id: 111,
      role: "Analista de Datos",
      topic: "Business Metrics",
      kind: "scenario",
      es: "Marketing y Finanzas calculan 'cliente activo' de forma distinta. ¿Cómo resolverías la definición y su gobierno?",
      en: "Marketing and Finance calculate 'active customer' differently. How would you resolve the definition and governance?"
    },
    {
      id: 112,
      role: "Analista de Datos",
      topic: "Experimentation",
      kind: "scenario",
      es: "Un KPI subió después de una campaña. ¿Cómo evitarías concluir causalidad demasiado pronto?",
      en: "A KPI increased after a campaign. How would you avoid concluding causality too quickly?"
    },
    {
      id: 113,
      role: "Analista de Datos",
      topic: "Delta Lake",
      kind: "theory",
      es: "¿Qué beneficios prácticos de Delta Lake debería entender un analista aunque no administre pipelines?",
      en: "What practical Delta Lake benefits should an analyst understand even if they do not manage pipelines?"
    },
    {
      id: 114,
      role: "Analista de Datos",
      topic: "Data Sharing",
      kind: "scenario",
      es: "Necesitas entregar datos a un partner externo sin enviar archivos manualmente. ¿Qué alternativa de Databricks evaluarías?",
      en: "You need to provide data to an external partner without manually sending files. What Databricks option would you evaluate?"
    },
    {
      id: 115,
      role: "Analista de Datos",
      topic: "Lakehouse Federation",
      kind: "scenario",
      es: "Necesitas explorar datos en una base externa antes de decidir si se ingieren. ¿Cómo puede ayudarte federation?",
      en: "You need to explore data in an external database before deciding whether to ingest it. How can federation help?"
    },
    {
      id: 116,
      role: "Analista de Datos",
      topic: "Statistics",
      kind: "theory",
      es: "Explica diferencia entre correlación, causalidad, intervalo de confianza y significancia práctica.",
      en: "Explain the difference between correlation, causation, confidence interval, and practical significance."
    },
    {
      id: 117,
      role: "Analista de Datos",
      topic: "Storytelling",
      kind: "experience",
      es: "Cuéntame una vez que un análisis cambió una decisión de negocio. ¿Qué parte de la comunicación fue decisiva?",
      en: "Tell me about a time an analysis changed a business decision. What part of the communication was decisive?"
    },
    {
      id: 118,
      role: "Analista de Datos",
      topic: "Governance",
      kind: "scenario",
      es: "Te niegan acceso a una tabla sensible. ¿Qué información necesitas para justificar acceso mínimo sin pedir permisos excesivos?",
      en: "You are denied access to a sensitive table. What information do you need to justify least-privilege access without requesting excessive permissions?"
    },
    {
      id: 119,
      role: "Analista de Datos",
      topic: "AI/BI",
      kind: "theory",
      es: "¿Cómo combinarías dashboards, Metric Views y Genie para autoservicio sin perder consistencia?",
      en: "How would you combine dashboards, Metric Views, and Genie for self-service without losing consistency?"
    },
    {
      id: 120,
      role: "Analista de Datos",
      topic: "Case",
      kind: "scenario",
      es: "Ventas cae 12% este mes. Estructura un análisis de diagnóstico en Databricks desde hipótesis hasta recomendación.",
      en: "Sales dropped 12% this month. Structure a diagnostic analysis in Databricks from hypotheses to recommendation."
    }
  ],

  "Delivery Manager": [
    {
      id: 121,
      role: "Delivery Manager",
      topic: "Delivery",
      kind: "experience",
      es: "Describe un programa Databricks que hayas gestionado. ¿Cómo medías avance real más allá del porcentaje completado?",
      en: "Describe a Databricks program you managed. How did you measure real progress beyond percent complete?"
    },
    {
      id: 122,
      role: "Delivery Manager",
      topic: "Scope",
      kind: "scenario",
      es: "El cliente agrega una fuente crítica sin mover la fecha. ¿Cómo haces análisis de impacto y negociación de alcance?",
      en: "The customer adds a critical source without moving the date. How do you perform impact analysis and negotiate scope?"
    },
    {
      id: 123,
      role: "Delivery Manager",
      topic: "Risk",
      kind: "experience",
      es: "Cuéntame un riesgo que se convirtió en issue. ¿Qué señales existían y qué cambiaste después?",
      en: "Tell me about a risk that became an issue. What signals existed and what did you change afterward?"
    },
    {
      id: 124,
      role: "Delivery Manager",
      topic: "Databricks Fundamentals",
      kind: "theory",
      es: "Explica en términos de delivery la diferencia entre Lakeflow Connect, Pipelines y Jobs y por qué importa para estimar trabajo.",
      en: "Explain in delivery terms the difference between Lakeflow Connect, Pipelines, and Jobs and why it matters for estimating work."
    },
    {
      id: 125,
      role: "Delivery Manager",
      topic: "Unity Catalog",
      kind: "theory",
      es: "¿Por qué Unity Catalog puede afectar cronograma, dependencias y criterios de aceptación aunque no seas quien configure permisos?",
      en: "Why can Unity Catalog affect schedule, dependencies, and acceptance criteria even if you are not configuring permissions?"
    },
    {
      id: 126,
      role: "Delivery Manager",
      topic: "Environment Strategy",
      kind: "scenario",
      es: "Desarrollo avanza pero QA está bloqueado por ambientes y accesos. ¿Cómo previenes este tipo de dependencia?",
      en: "Development is progressing but QA is blocked by environments and access. How do you prevent this type of dependency?"
    },
    {
      id: 127,
      role: "Delivery Manager",
      topic: "Data Quality",
      kind: "scenario",
      es: "El equipo quiere ir a producción con 2% de registros inválidos. ¿Cómo estructuras una decisión informada con negocio?",
      en: "The team wants to go live with 2% invalid records. How do you structure an informed decision with the business?"
    },
    {
      id: 128,
      role: "Delivery Manager",
      topic: "Performance",
      kind: "scenario",
      es: "Un SLA técnico no se cumple cerca del go-live. ¿Cómo organizas triage, ownership, evidencia y decisión de salida?",
      en: "A technical SLA is missed near go-live. How do you organize triage, ownership, evidence, and the go-live decision?"
    },
    {
      id: 129,
      role: "Delivery Manager",
      topic: "Cost",
      kind: "scenario",
      es: "El consumo Databricks supera el forecast 40%. ¿Qué información pedirías antes de escalar o recortar alcance?",
      en: "Databricks consumption exceeds forecast by 40%. What information would you request before escalating or cutting scope?"
    },
    {
      id: 130,
      role: "Delivery Manager",
      topic: "Migration",
      kind: "theory",
      es: "¿Qué hace riesgosa una migración de datos y cómo dividirías el trabajo en olas verificables?",
      en: "What makes a data migration risky and how would you divide the work into verifiable waves?"
    },
    {
      id: 131,
      role: "Delivery Manager",
      topic: "CI/CD",
      kind: "theory",
      es: "¿Qué beneficios de delivery aportan control de versiones, pruebas automatizadas y Declarative Automation Bundles?",
      en: "What delivery benefits do version control, automated testing, and Declarative Automation Bundles provide?"
    },
    {
      id: 132,
      role: "Delivery Manager",
      topic: "Stakeholders",
      kind: "experience",
      es: "Cuéntame una conversación difícil con un sponsor sobre retraso, riesgo o calidad. ¿Cómo la preparaste?",
      en: "Tell me about a difficult sponsor conversation about delay, risk, or quality. How did you prepare it?"
    },
    {
      id: 133,
      role: "Delivery Manager",
      topic: "Agile",
      kind: "scenario",
      es: "El equipo completa muchas historias pero no entrega capacidades utilizables. ¿Qué cambiarías en planificación y definición de terminado?",
      en: "The team completes many stories but does not deliver usable capabilities. What would you change in planning and definition of done?"
    },
    {
      id: 134,
      role: "Delivery Manager",
      topic: "Acceptance",
      kind: "theory",
      es: "Define criterios de aceptación para un pipeline productivo, incluyendo funcionalidad, datos, operación y soporte.",
      en: "Define acceptance criteria for a production pipeline, including functionality, data, operations, and support."
    },
    {
      id: 135,
      role: "Delivery Manager",
      topic: "Support",
      kind: "scenario",
      es: "Después del go-live aumentan incidentes. ¿Cómo diseñarías hypercare, SLAs, guardias y transición a operación?",
      en: "After go-live, incidents increase. How would you design hypercare, SLAs, on-call coverage, and transition to operations?"
    },
    {
      id: 136,
      role: "Delivery Manager",
      topic: "Dependencies",
      kind: "experience",
      es: "¿Cómo has gestionado dependencias con seguridad, redes, fuentes externas y equipos de negocio?",
      en: "How have you managed dependencies with security, networking, external sources, and business teams?"
    },
    {
      id: 137,
      role: "Delivery Manager",
      topic: "Executive Reporting",
      kind: "scenario",
      es: "El steering committee tiene 15 minutos. ¿Qué métricas y decisiones llevarías para un proyecto Databricks?",
      en: "The steering committee has 15 minutes. What metrics and decisions would you bring for a Databricks project?"
    },
    {
      id: 138,
      role: "Delivery Manager",
      topic: "Technical Debt",
      kind: "scenario",
      es: "El equipo propone deuda técnica para cumplir fecha. ¿Cómo haces explícito el costo futuro y el plan de pago?",
      en: "The team proposes technical debt to hit the date. How do you make future cost and the repayment plan explicit?"
    },
    {
      id: 139,
      role: "Delivery Manager",
      topic: "Change Management",
      kind: "experience",
      es: "Cuéntame cómo lograste adopción de una nueva plataforma o proceso cuando los usuarios preferían la herramienta anterior.",
      en: "Tell me how you drove adoption of a new platform or process when users preferred the previous tool."
    },
    {
      id: 140,
      role: "Delivery Manager",
      topic: "Recovery",
      kind: "scenario",
      es: "Una entrega crítica falla el día del release. ¿Cómo coordinas rollback, comunicación, causa raíz y reintento?",
      en: "A critical delivery fails on release day. How do you coordinate rollback, communication, root cause, and retry?"
    }
  ],

  "BI Analyst": [
    {
      id: 141,
      role: "BI Analyst",
      topic: "AI/BI Dashboards",
      kind: "experience",
      es: "Describe un dashboard de alto impacto que hayas construido. ¿Qué decisiones de diseño mejoraron su adopción?",
      en: "Describe a high-impact dashboard you built. What design decisions improved adoption?"
    },
    {
      id: 142,
      role: "BI Analyst",
      topic: "Databricks SQL",
      kind: "hands-on",
      es: "Escribe verbalmente la estrategia SQL para calcular revenue, crecimiento interanual y contribución porcentual por región.",
      en: "Verbally describe the SQL strategy to calculate revenue, year-over-year growth, and percentage contribution by region."
    },
    {
      id: 143,
      role: "BI Analyst",
      topic: "Metric Views",
      kind: "theory",
      es: "¿Cómo usarías Metric Views para centralizar KPIs reutilizables entre distintos dashboards?",
      en: "How would you use Metric Views to centralize reusable KPIs across different dashboards?"
    },
    {
      id: 144,
      role: "BI Analyst",
      topic: "Genie",
      kind: "scenario",
      es: "El CFO quiere hacer preguntas ad hoc sin aprender SQL. ¿Cómo prepararías una experiencia con Genie que preserve definiciones oficiales?",
      en: "The CFO wants to ask ad hoc questions without learning SQL. How would you prepare a Genie experience that preserves official definitions?"
    },
    {
      id: 145,
      role: "BI Analyst",
      topic: "Unity Catalog",
      kind: "theory",
      es: "Explica cómo discovery, lineage y permisos de Unity Catalog ayudan a construir BI confiable.",
      en: "Explain how Unity Catalog discovery, lineage, and permissions help build trustworthy BI."
    },
    {
      id: 146,
      role: "BI Analyst",
      topic: "SQL Warehouse",
      kind: "scenario",
      es: "Cientos de usuarios abren dashboards a las 9:00. ¿Qué revisarías para concurrencia, performance y costo?",
      en: "Hundreds of users open dashboards at 9:00. What would you review for concurrency, performance, and cost?"
    },
    {
      id: 147,
      role: "BI Analyst",
      topic: "Performance",
      kind: "hands-on",
      es: "Un dashboard tiene cinco queries similares que repiten joins pesados. ¿Cómo reducirías trabajo redundante?",
      en: "A dashboard has five similar queries repeating expensive joins. How would you reduce redundant work?"
    },
    {
      id: 148,
      role: "BI Analyst",
      topic: "Data Modeling",
      kind: "theory",
      es: "¿Cuándo preferirías modelo estrella, semantic layer o tabla desnormalizada para BI?",
      en: "When would you prefer a star schema, semantic layer, or denormalized table for BI?"
    },
    {
      id: 149,
      role: "BI Analyst",
      topic: "Data Quality",
      kind: "scenario",
      es: "Un KPI cambia 8% tras una actualización de pipeline. ¿Cómo determinas si es cambio real o defecto?",
      en: "A KPI changes 8% after a pipeline update. How do you determine whether it is real change or a defect?"
    },
    {
      id: 150,
      role: "BI Analyst",
      topic: "Dashboard Design",
      kind: "theory",
      es: "¿Cómo eliges entre KPI, línea, barras, tabla y scatter según la pregunta de negocio?",
      en: "How do you choose among KPI, line, bar, table, and scatter based on the business question?"
    },
    {
      id: 151,
      role: "BI Analyst",
      topic: "Self-service",
      kind: "scenario",
      es: "Autoservicio generó 40 versiones de la misma métrica. ¿Cómo recuperas consistencia sin bloquear exploración?",
      en: "Self-service produced 40 versions of the same metric. How do you restore consistency without blocking exploration?"
    },
    {
      id: 152,
      role: "BI Analyst",
      topic: "AI/BI",
      kind: "theory",
      es: "¿Qué capacidades aporta AI/BI además de visualización tradicional?",
      en: "What capabilities does AI/BI add beyond traditional visualization?"
    },
    {
      id: 153,
      role: "BI Analyst",
      topic: "Governance",
      kind: "scenario",
      es: "Una visualización mezcla datos públicos y sensibles. ¿Cómo garantizas que cada audiencia vea lo permitido?",
      en: "A visualization mixes public and sensitive data. How do you ensure each audience sees only what is allowed?"
    },
    {
      id: 154,
      role: "BI Analyst",
      topic: "Refresh",
      kind: "experience",
      es: "Cuéntame un caso en que cambiar frecuencia de refresh mejoró costo o experiencia sin perder valor.",
      en: "Tell me about a case where changing refresh frequency improved cost or user experience without losing value."
    },
    {
      id: 155,
      role: "BI Analyst",
      topic: "Lakehouse Federation",
      kind: "scenario",
      es: "Un dashboard necesita temporalmente datos externos no ingeridos. ¿Cómo evaluarías federation como solución puente?",
      en: "A dashboard temporarily needs external data that has not been ingested. How would you evaluate federation as a bridge solution?"
    },
    {
      id: 156,
      role: "BI Analyst",
      topic: "Delta Lake",
      kind: "theory",
      es: "¿Qué relación tienen tablas Delta, historial y confiabilidad con la capa de BI?",
      en: "What is the relationship between Delta tables, history, and reliability in the BI layer?"
    },
    {
      id: 157,
      role: "BI Analyst",
      topic: "Accessibility",
      kind: "scenario",
      es: "Tu dashboard será usado por ejecutivos en móvil y por analistas en escritorio. ¿Cómo adaptarías diseño y navegación?",
      en: "Your dashboard will be used by executives on mobile and analysts on desktop. How would you adapt design and navigation?"
    },
    {
      id: 158,
      role: "BI Analyst",
      topic: "Testing",
      kind: "hands-on",
      es: "¿Cómo probarías que un dashboard no cambió resultados después de modificar una Metric View?",
      en: "How would you test that a dashboard did not change results after modifying a Metric View?"
    },
    {
      id: 159,
      role: "BI Analyst",
      topic: "Storytelling",
      kind: "experience",
      es: "Describe una vez que simplificaste un dashboard y lograste una decisión más rápida.",
      en: "Describe a time you simplified a dashboard and enabled a faster decision."
    },
    {
      id: 160,
      role: "BI Analyst",
      topic: "Case",
      kind: "scenario",
      es: "El margen cae pero revenue sube. Diseña un dashboard de diagnóstico y las preguntas que debería responder.",
      en: "Margin is falling while revenue is rising. Design a diagnostic dashboard and the questions it should answer."
    }
  ],

  "Ingeniero Analítico": [
    {
      id: 161,
      role: "Ingeniero Analítico",
      topic: "dbt / SQL",
      kind: "experience",
      es: "Describe un proyecto donde transformaste datos con SQL/dbt en Databricks. ¿Cómo estructuraste modelos, pruebas y dependencias?",
      en: "Describe a project where you transformed data with SQL/dbt on Databricks. How did you structure models, tests, and dependencies?"
    },
    {
      id: 162,
      role: "Ingeniero Analítico",
      topic: "Metric Views",
      kind: "hands-on",
      es: "Diseña una Metric View para revenue con dimensiones de fecha, producto y región y explica cómo evitarías definiciones duplicadas.",
      en: "Design a Metric View for revenue with date, product, and region dimensions and explain how you would avoid duplicated definitions."
    },
    {
      id: 163,
      role: "Ingeniero Analítico",
      topic: "Unity Catalog",
      kind: "theory",
      es: "¿Cómo organizarías catálogos y esquemas para separar raw, curated y semantic assets sin romper ownership por dominio?",
      en: "How would you organize catalogs and schemas to separate raw, curated, and semantic assets without breaking domain ownership?"
    },
    {
      id: 164,
      role: "Ingeniero Analítico",
      topic: "Delta Lake",
      kind: "theory",
      es: "¿Qué decisiones de modelado y layout en Delta afectan el trabajo de un analytics engineer?",
      en: "Which Delta modeling and layout decisions affect an analytics engineer's work?"
    },
    {
      id: 165,
      role: "Ingeniero Analítico",
      topic: "Lakeflow Pipelines",
      kind: "scenario",
      es: "Un equipo quiere mover transformaciones SQL programadas a Lakeflow Pipelines. ¿Qué beneficios y cambios operativos evaluarías?",
      en: "A team wants to move scheduled SQL transformations to Lakeflow Pipelines. What benefits and operational changes would you evaluate?"
    },
    {
      id: 166,
      role: "Ingeniero Analítico",
      topic: "Lakeflow Jobs",
      kind: "hands-on",
      es: "¿Cómo orquestarías transformaciones dbt, validaciones y publicación de métricas usando Lakeflow Jobs?",
      en: "How would you orchestrate dbt transformations, validations, and metric publication using Lakeflow Jobs?"
    },
    {
      id: 167,
      role: "Ingeniero Analítico",
      topic: "CI/CD",
      kind: "experience",
      es: "Cuéntame cómo has implementado code review, tests y promoción entre ambientes para transformaciones analíticas.",
      en: "Tell me how you have implemented code review, tests, and promotion across environments for analytics transformations."
    },
    {
      id: 168,
      role: "Ingeniero Analítico",
      topic: "Declarative Automation Bundles",
      kind: "theory",
      es: "¿Qué problema resuelven Declarative Automation Bundles y cómo encajan con analytics engineering?",
      en: "What problem do Declarative Automation Bundles solve and how do they fit analytics engineering?"
    },
    {
      id: 169,
      role: "Ingeniero Analítico",
      topic: "Data Quality",
      kind: "hands-on",
      es: "Define pruebas para unicidad, nulos, relaciones, freshness y reglas de negocio en una capa curated.",
      en: "Define tests for uniqueness, nulls, relationships, freshness, and business rules in a curated layer."
    },
    {
      id: 170,
      role: "Ingeniero Analítico",
      topic: "Incremental Models",
      kind: "scenario",
      es: "Un modelo full-refresh tarda tres horas. ¿Cómo decidirías si hacerlo incremental y cómo manejarías backfills?",
      en: "A full-refresh model takes three hours. How would you decide whether to make it incremental and how would you handle backfills?"
    },
    {
      id: 171,
      role: "Ingeniero Analítico",
      topic: "Performance",
      kind: "scenario",
      es: "Una consulta analítica tiene joins con skew y muchas columnas. ¿Qué cambios probarías antes de escalar compute?",
      en: "An analytical query has skewed joins and many columns. What changes would you test before scaling compute?"
    },
    {
      id: 172,
      role: "Ingeniero Analítico",
      topic: "Semantic Layer",
      kind: "theory",
      es: "Compara semantic layer, Metric Views y lógica embebida en dashboards desde mantenibilidad y gobierno.",
      en: "Compare semantic layer, Metric Views, and dashboard-embedded logic from maintainability and governance perspectives."
    },
    {
      id: 173,
      role: "Ingeniero Analítico",
      topic: "Genie",
      kind: "scenario",
      es: "¿Qué información semántica y ejemplos de negocio prepararías para mejorar respuestas de Genie?",
      en: "What semantic information and business examples would you prepare to improve Genie responses?"
    },
    {
      id: 174,
      role: "Ingeniero Analítico",
      topic: "Lineage",
      kind: "theory",
      es: "¿Cómo usarías lineage para evaluar impacto antes de cambiar una columna o métrica crítica?",
      en: "How would you use lineage to assess impact before changing a critical column or metric?"
    },
    {
      id: 175,
      role: "Ingeniero Analítico",
      topic: "Data Contracts",
      kind: "scenario",
      es: "Una fuente cambia nombres y tipos sin aviso. ¿Cómo introducirías contratos y compatibilidad entre productor y consumidor?",
      en: "A source changes names and types without notice. How would you introduce contracts and compatibility between producer and consumer?"
    },
    {
      id: 176,
      role: "Ingeniero Analítico",
      topic: "Lakehouse Federation",
      kind: "scenario",
      es: "¿Cuándo es razonable modelar sobre datos federados y cuándo deberías exigir ingestión al lakehouse?",
      en: "When is it reasonable to model over federated data and when should you require ingestion into the lakehouse?"
    },
    {
      id: 177,
      role: "Ingeniero Analítico",
      topic: "Cost",
      kind: "experience",
      es: "Cuéntame una optimización SQL o de modelo que redujo costo o tiempo de ejecución de forma medible.",
      en: "Tell me about a SQL or modeling optimization that measurably reduced cost or execution time."
    },
    {
      id: 178,
      role: "Ingeniero Analítico",
      topic: "Documentation",
      kind: "hands-on",
      es: "¿Qué documentación automática y manual mantendrías para modelos, métricas, owners y dependencias?",
      en: "What automated and manual documentation would you maintain for models, metrics, owners, and dependencies?"
    },
    {
      id: 179,
      role: "Ingeniero Analítico",
      topic: "Migration",
      kind: "scenario",
      es: "Debes migrar 300 modelos SQL heredados. ¿Cómo priorizas, pruebas equivalencia y reduces riesgo?",
      en: "You need to migrate 300 legacy SQL models. How do you prioritize, test equivalence, and reduce risk?"
    },
    {
      id: 180,
      role: "Ingeniero Analítico",
      topic: "Case",
      kind: "scenario",
      es: "Diseña la capa curated y semántica para una empresa SaaS que necesita ARR, churn, NRR y cohortes consistentes.",
      en: "Design the curated and semantic layer for a SaaS company that needs consistent ARR, churn, NRR, and cohorts."
    }
  ],

  "Machine Learning Engineer": [
    {
      id: 181,
      role: "Machine Learning Engineer",
      topic: "MLflow 3",
      kind: "experience",
      es: "Cuéntame un sistema de ML que llevaste a producción con MLflow. ¿Cómo gestionaste experimentos, registro, promoción y rollback?",
      en: "Tell me about an ML system you took to production with MLflow. How did you manage experiments, registration, promotion, and rollback?"
    },
    {
      id: 182,
      role: "Machine Learning Engineer",
      topic: "MLflow 3",
      kind: "theory",
      es: "Explica qué aporta MLflow 3 para modelos y aplicaciones GenAI y cómo cambia la observabilidad del ciclo de vida.",
      en: "Explain what MLflow 3 adds for models and GenAI applications and how it changes lifecycle observability."
    },
    {
      id: 183,
      role: "Machine Learning Engineer",
      topic: "Feature Engineering",
      kind: "hands-on",
      es: "Diseña un pipeline de features reutilizable con Unity Catalog garantizando point-in-time correctness y evitando leakage.",
      en: "Design a reusable feature pipeline with Unity Catalog while ensuring point-in-time correctness and avoiding leakage."
    },
    {
      id: 184,
      role: "Machine Learning Engineer",
      topic: "Feature Store",
      kind: "scenario",
      es: "Un modelo online necesita features con menos de 50 ms de acceso. ¿Cómo diseñarías publicación y lookup online?",
      en: "An online model needs feature access under 50 ms. How would you design online publication and lookup?"
    },
    {
      id: 185,
      role: "Machine Learning Engineer",
      topic: "Model Serving",
      kind: "hands-on",
      es: "Describe cómo empaquetarías, registrarías y desplegarías un modelo custom en Model Serving con dependencias reproducibles.",
      en: "Describe how you would package, register, and deploy a custom model to Model Serving with reproducible dependencies."
    },
    {
      id: 186,
      role: "Machine Learning Engineer",
      topic: "Model Serving",
      kind: "scenario",
      es: "El endpoint presenta picos de latencia y errores bajo carga. ¿Qué métricas revisarías y qué cambios probarías?",
      en: "The endpoint shows latency spikes and errors under load. Which metrics would you inspect and what changes would you test?"
    },
    {
      id: 187,
      role: "Machine Learning Engineer",
      topic: "MLOps",
      kind: "scenario",
      es: "Diseña CI/CD para entrenamiento, validación, aprobación, deployment, canary y rollback de un modelo crítico.",
      en: "Design CI/CD for training, validation, approval, deployment, canary, and rollback of a critical model."
    },
    {
      id: 188,
      role: "Machine Learning Engineer",
      topic: "Unity Catalog",
      kind: "theory",
      es: "¿Cómo usarías Unity Catalog para gobernar datos, features, modelos, funciones y permisos de serving?",
      en: "How would you use Unity Catalog to govern data, features, models, functions, and serving permissions?"
    },
    {
      id: 189,
      role: "Machine Learning Engineer",
      topic: "Monitoring",
      kind: "experience",
      es: "Cuéntame un incidente real de drift o degradación de un modelo. ¿Cómo lo detectaste y qué acción tomaste?",
      en: "Tell me about a real drift or model degradation incident. How did you detect it and what action did you take?"
    },
    {
      id: 190,
      role: "Machine Learning Engineer",
      topic: "Batch Inference",
      kind: "scenario",
      es: "Debes puntuar 500 millones de registros cada noche. ¿Cómo diseñarías batch inference y controlarías costo y reintentos?",
      en: "You must score 500 million records every night. How would you design batch inference and control cost and retries?"
    },
    {
      id: 191,
      role: "Machine Learning Engineer",
      topic: "Serverless",
      kind: "theory",
      es: "¿Qué workloads de ML moverías a serverless y cuáles podrían requerir compute más controlado? Explica por qué.",
      en: "Which ML workloads would you move to serverless and which might require more controlled compute? Explain why."
    },
    {
      id: 192,
      role: "Machine Learning Engineer",
      topic: "Spark",
      kind: "hands-on",
      es: "Un feature engineering job tiene skew severo y spills. ¿Cómo lo diagnosticarías y optimizarías?",
      en: "A feature-engineering job has severe skew and spills. How would you diagnose and optimize it?"
    },
    {
      id: 193,
      role: "Machine Learning Engineer",
      topic: "AI Search",
      kind: "scenario",
      es: "Diseña la capa de retrieval para una aplicación RAG con AI Search y explica cómo medirías recall y calidad end-to-end.",
      en: "Design the retrieval layer for a RAG application with AI Search and explain how you would measure recall and end-to-end quality."
    },
    {
      id: 194,
      role: "Machine Learning Engineer",
      topic: "Agents",
      kind: "scenario",
      es: "Un agente puede consultar datos y ejecutar acciones. ¿Cómo implementarías permisos, trazas, evaluación y límites de seguridad?",
      en: "An agent can query data and execute actions. How would you implement permissions, tracing, evaluation, and safety boundaries?"
    },
    {
      id: 195,
      role: "Machine Learning Engineer",
      topic: "Lakebase",
      kind: "scenario",
      es: "Una aplicación ML necesita estado transaccional de baja latencia. ¿Qué datos pondrías en Lakebase y cuáles dejarías en el Lakehouse?",
      en: "An ML application needs low-latency transactional state. What data would you put in Lakebase and what would you keep in the Lakehouse?"
    },
    {
      id: 196,
      role: "Machine Learning Engineer",
      topic: "Declarative Automation Bundles",
      kind: "hands-on",
      es: "¿Cómo versionarías y desplegarías jobs, modelos y recursos de un proyecto MLOps usando Declarative Automation Bundles?",
      en: "How would you version and deploy jobs, models, and resources for an MLOps project using Declarative Automation Bundles?"
    },
    {
      id: 197,
      role: "Machine Learning Engineer",
      topic: "Testing",
      kind: "theory",
      es: "¿Qué pruebas aplicarías a features, código de entrenamiento, modelo, endpoint y contrato de entrada/salida?",
      en: "What tests would you apply to features, training code, model, endpoint, and input/output contract?"
    },
    {
      id: 198,
      role: "Machine Learning Engineer",
      topic: "Cost",
      kind: "scenario",
      es: "El modelo cumple SLA pero cuesta demasiado. ¿Cómo separarías costo de entrenamiento, features, serving y observabilidad?",
      en: "The model meets its SLA but costs too much. How would you separate training, feature, serving, and observability costs?"
    },
    {
      id: 199,
      role: "Machine Learning Engineer",
      topic: "Reliability",
      kind: "scenario",
      es: "Un modelo crítico debe seguir operando aunque falle una dependencia de features. Diseña degradación controlada y recuperación.",
      en: "A critical model must keep operating if a feature dependency fails. Design graceful degradation and recovery."
    },
    {
      id: 200,
      role: "Machine Learning Engineer",
      topic: "Architecture",
      kind: "scenario",
      es: "Diseña una plataforma MLOps en Databricks para varios equipos con autoservicio, gobierno, trazabilidad, serving y monitoreo.",
      en: "Design an MLOps platform on Databricks for multiple teams with self-service, governance, traceability, serving, and monitoring."
    }
  ]

};

// Validación para detectar errores comunes al editar el banco.
(() => {
  const validKinds = new Set(["experience", "theory", "scenario", "hands-on"]);
  const ids = new Set();
  for (const role of ROLES) {
    if (!Array.isArray(BANK[role])) throw new Error(`Falta el banco del rol: ${role}`);
    BANK[role].forEach((q, i) => {
      if (!q.id || ids.has(q.id)) throw new Error(`ID inválido o repetido: ${q.id} (${role}, posición ${i + 1})`);
      ids.add(q.id);
      if (q.role !== role) throw new Error(`Pregunta ${q.id}: role no coincide con el grupo ${role}`);
      if (!q.topic || !q.es || !q.en) throw new Error(`Pregunta ${q.id}: faltan campos obligatorios`);
      if (!validKinds.has(q.kind)) throw new Error(`Pregunta ${q.id}: kind inválido (${q.kind})`);
    });
  }
})();
