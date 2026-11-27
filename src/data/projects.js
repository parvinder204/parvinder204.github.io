export const projectFilters = ['All', 'AI/ML', 'Backend', 'Full Stack']

// kind: label shown on the card footer. private:false = personal project (no lock icon).
// featured: true → shown on the Home page.
export const projects = [
  { icon: 'bot', title: 'AI WhatsApp Chatbot', category: 'AI/ML', featured: true,
    desc: 'GPT-4 + Vision API + OpenCV chatbot integrated with Odoo CRM via the Meta WhatsApp API. Dramatic improvements in lead conversion.',
    tech: ['GPT-4', 'Vision API', 'OpenCV', 'Django', 'Meta API', 'Odoo CRM', 'MySQL'], github: null },

  { icon: 'sparkles', title: 'GenhanceAI Platform', category: 'AI/ML', featured: true,
    desc: 'GenAI content optimisation engine — Flask microservices on AWS (S3, SQS, EC2) with NextAuth and the Perplexity API.',
    tech: ['Flask', 'OpenAI', 'Perplexity API', 'Playwright', 'Next.js', 'AWS S3', 'SQS'], github: null },

  { icon: 'mic', title: 'AI Support Agent (RAG)', category: 'AI/ML', featured: true, private: false, kind: 'Personal · AI',
    desc: 'Full-stack, multi-tenant-style AI customer support platform for appointment-based businesses (built around a salon/spa). Combines a RAG knowledge base, a multi-agent LLM orchestrator, booking, a real-time voice agent and a business-document intelligence pipeline.',
    tech: ['Python 3.12', 'FastAPI', 'SQLAlchemy 2.0', 'Alembic', 'PostgreSQL', 'pgvector', 'Celery', 'Redis', 'OpenAI', 'sentence-transformers', 'Deepgram', 'Exotel', 'JWT'], github: null },

  { icon: 'code', title: 'AI Pull Request Reviewer & Test Generator', category: 'AI/ML', private: false, kind: 'Personal · AI',
    desc: 'An agentic AI system that reviews Python pull requests and generates verified pytest suites.',
    tech: ['Python 3.12', 'FastAPI', 'LangGraph', 'OpenAI API', 'Docker SDK', 'pytest', 'SQLAlchemy 2.0 (async)', 'Alembic', 'PostgreSQL 16', 'Radon', 'Ruff', 'Bandit', 'Vue 3', 'Vite', 'Docker Compose'], github: null },

  { icon: 'cpu', title: 'Self-Healing Data Science Agent', category: 'AI/ML', private: false, kind: 'Personal · AI',
    desc: 'Describe an analysis in natural language and upload a CSV. An LLM plans and writes the Python, which runs in an OS-level sandbox. Failures are classified and repaired within a hard budget of three attempts, and results are validated against the real data before a report is produced.',
    tech: ['Python', 'LLM Agents', 'OS-level Sandbox', 'PostgreSQL', 'Docker', 'Vue.js'], github: null },

  { icon: 'users', title: 'ECU – Membership Portal Backend', category: 'Backend', kind: 'Client · Private',
    desc: 'Django REST API for the Eastern Credit Union membership onboarding system. Applicants fill in a multi-section KYC application, staff review it, a verification officer verifies it, and an admin gives the final approval.',
    tech: ['Python 3.12', 'Django 6.1', 'DRF', 'SimpleJWT', 'PostgreSQL', 'Redis', 'Celery', 'AWS S3'], github: null },

  { icon: 'chart', title: 'Tag Manager Platform', category: 'Full Stack',
    desc: 'Large-scale investigation & reporting SaaS. Performance improvements, major bug fixes, UX enhancements and AWS ECS/EC2/RDS deployment.',
    tech: ['Django', 'DRF', 'React.js', 'AWS ECS', 'PostgreSQL'], github: null },

  { icon: 'database', title: 'Daasity Data Pipeline', category: 'Backend',
    desc: 'Automated data pipeline: S3 ingestion → cleaning → validation → Snowflake loading via FastAPI async microservices.',
    tech: ['FastAPI', 'AWS S3', 'Snowflake', 'Python', 'Async'], github: null },

  { icon: 'pin', title: 'Vlocator', category: 'Full Stack',
    desc: 'Vegan restaurant discovery with Playwright scraping, Celery tasks, a Vue.js frontend and a PostgreSQL backend.',
    tech: ['Django', 'Celery', 'Playwright', 'Vue.js', 'PostgreSQL'], github: null },

  { icon: 'calendar', title: 'Engagement Celebration', category: 'Full Stack',
    desc: 'Real-time vendor/couple event platform with WebSocket live features, Celery tasks and PostgreSQL.',
    tech: ['Django', 'Celery', 'WebSockets', 'PostgreSQL'], github: null },
]

export const services = [
  { icon: 'terminal', title: 'Python Backend', desc: 'Production-grade APIs and microservices with Django, FastAPI and Flask.',
    items: ['Django REST Framework APIs', 'FastAPI async microservices', 'ORM & query optimisation', 'JWT / OAuth / session auth', 'Celery task queues'] },
  { icon: 'layout', title: 'Full Stack Web Apps', desc: 'Modern, responsive web applications from database to polished UI.',
    items: ['React.js / Next.js / Vue 3', 'SPA + SSR architectures', 'REST & GraphQL integration', 'Pinia / Redux state management', 'Tailwind responsive design'] },
  { icon: 'cloud', title: 'Cloud & DevOps', desc: 'Deploy, scale and monitor on AWS and Digital Ocean.',
    items: ['AWS EC2 / S3 / RDS / SQS', 'Docker containerisation', 'GitHub Actions CI/CD', 'Server configuration & maintenance', 'Performance monitoring'] },
  { icon: 'sparkles', title: 'AI & Automation', desc: 'Integrate cutting-edge AI into your products and automate workflows.',
    items: ['OpenAI GPT-4 integration', 'RAG pipelines (LangChain, pgvector, Qdrant)', 'WhatsApp / CRM AI chatbots', 'Browser automation (Playwright)', 'N8N workflow automation'] },
  { icon: 'database', title: 'Database Engineering', desc: 'Design, optimise and scale your data layer for performance.',
    items: ['PostgreSQL & MySQL schema, indexing & tuning', 'Vector search with pgvector & Qdrant', 'Graph databases & knowledge graphs with Neo4j', 'Redis caching strategies', 'Snowflake & BigQuery data pipelines'] },
  { icon: 'plug', title: 'API & Integrations', desc: 'Connect systems with third-party APIs and external services.',
    items: ['Meta WhatsApp Business API', 'Odoo CRM integration', 'Payment APIs (Masspay)', 'KYC APIs (Veriff)', 'Custom webhook systems'] },
]

export const process = [
  { icon: 'search', title: 'Discovery', desc: 'Understanding your requirements, goals and technical constraints.' },
  { icon: 'layers', title: 'Architecture', desc: 'Designing a scalable, maintainable system blueprint.' },
  { icon: 'code', title: 'Development', desc: 'Iterative, test-driven implementation with regular check-ins.' },
  { icon: 'zap', title: 'Delivery', desc: 'Deployment, documentation and ongoing support.' },
]