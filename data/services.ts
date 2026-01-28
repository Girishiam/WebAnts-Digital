
import { Code, Server, Database, Cloud, Activity, Layout, Bot, Zap, Search, Map, Globe, Share2, MessageSquare, Layers, CheckCircle2, FileText, Settings, Rocket, Network, Smartphone, Users, Mail } from 'lucide-react';

export const servicesData: Record<string, any> = {
    // --- WEB ENGINEERING ---
    "frontend": {
        title: "Frontend Engineering",
        subtitle: "Immersive, High-Performance User Interfaces",
        description: "We build pixel-perfect, highly interactive frontend applications that captivate users. Using modern frameworks like Next.js and React, combined with advanced animation libraries like GSAP, we ensure your digital presence is not just functional, but unforgettable.",
        icon: Layout,
        image: "/services/web-engineering.png",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
        features: [
            { title: "Component-Driven Architecture", description: "Reusable, modular components ensuring consistency and maintainability." },
            { title: "Performance Optimization", description: "Core Web Vitals focused development for lightning-fast load times." },
            { title: "Advanced Animations", description: "Fluid micro-interactions and scroll-triggered effects." },
            { title: "Accessible Design", description: "WCAG compliance to ensure your site is usable by everyone." }
        ],
        benefits: ["Higher Conversion Rates", "Improved SEO Rankings", "Reduced Bounce Rates", "Future-Proof Codebase"],
        process: [
            { title: "Discovery & UX Audit", description: "We analyze your user journey and wireframe high-fidelity prototypes." },
            { title: "Component Development", description: "Building an atomic design system for consistency." },
            { title: "Integration & Animation", description: "Connecting APIs and adding fluid motion effects." },
            { title: "Performance Tuning", description: "Optimizing assets and code splitting for speed." }
        ],
        deliverables: ["Responsive Web Application", "Design System / Component Library", "Source Code & Documentation", "Performance Report"]
    },
    "backend": {
        title: "Backend Infrastructure",
        subtitle: "Robust, Scalable Server-Side Systems",
        description: "The engine room of your digital platform. We architect secure, high-concurrency backend systems that handle complex logic and massive authentications with ease, ensuring your business runs smoothly 24/7.",
        icon: Server,
        image: "/services/web-engineering.png",
        techStack: ["Node.js", "Python (Django/FastAPI)", "Go", "GraphQL", "REST APIs"],
        features: [
            { title: "Microservices Architecture", description: "Decoupled services for independent scaling and deployment." },
            { title: "Secure Authentication", description: "OAuth2, JWT, and SSO implementation for bank-grade security." },
            { title: "API Development", description: "Well-documented, type-safe APIs for seamless integration." },
            { title: "Background Processing", description: "Asynchronous task queues for heavy computational operations." }
        ],
        benefits: ["99.99% Uptime", "Bank-Grade Security", "Infinite Scalability", "Seamless 3rd Party Integrations"],
        process: [
            { title: "System Architecture", description: "Designing the schema and microservices layout." },
            { title: "API Implementation", description: "Coding the logic and exposing REST/GraphQL endpoints." },
            { title: "Database Optimization", description: "Setting up indexing and caching layers." },
            { title: "Security & Testing", description: "Penetration testing and load balancing configuration." }
        ],
        deliverables: ["API Documentation (Swagger)", "Secure Server Infrastructure", "Database Schemas", "Automated Test Suites"]
    },
    "databases": {
        title: "Database Architecture",
        subtitle: "Optimized Data Storage & Retrieval",
        description: "Data is the new oil. We design normalized, efficient database schemas that ensure data integrity and lightning-fast retrieval, whether you need relational structure or NoSQL flexibility.",
        icon: Database,
        image: "/services/web-engineering.png",
        techStack: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
        features: [
            { title: "Data Modeling", description: "Efficient schema design to minimize redundancy and maximize speed." },
            { title: "Caching Strategies", description: "Redis implementation for sub-millisecond data access." },
            { title: "Automated Backups", description: "Point-in-time recovery to ensure zero data loss." },
            { title: "Migration Pipelines", description: "Safe, zero-downtime schema migrations." }
        ],
        benefits: ["Zero Data Loss", "Sub-millisecond Queries", "Cost-Effective Storage", "Intelligent Analytics"],
        process: [
            { title: "Data Pattern Analysis", description: "Understanding read/write ratios and data relationships." },
            { title: "Schema Design", description: "Creating ERDs and defining index strategies." },
            { title: "Migration Execution", description: "Safely transferring data from legacy systems." },
            { title: "Query Optimization", description: "Analyzing slow logs and refining SQL queries." }
        ],
        deliverables: ["Optimized Database Instance", "Entity Relationship Diagrams", "Backup Strategy Doc", "Performance Baseline Report"]
    },
    "devops": {
        title: "DevOps & Cloud",
        subtitle: "Automated Deployment & Infrastructure as Code",
        description: "We bridge the gap between development and operations. By automating your CI/CD pipelines and managing cloud infrastructure, we enable your team to ship code faster and more reliably.",
        icon: Cloud,
        image: "/services/web-engineering.png",
        techStack: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
        features: [
            { title: "CI/CD Pipelines", description: "Automated testing and deployment for rapid iteration." },
            { title: "Containerization", description: "Dockerized environments for consistent distinct behavior." },
            { title: "Infrastructure as Code", description: "Reproducible infrastructure management using Terraform." },
            { title: "Monitoring & Alerts", description: "Real-time health checks and automated incident response." }
        ],
        benefits: ["Faster Time to Market", "Reduced Server Costs", "Automatic Scaling", "Disaster Recovery"],
        process: [
            { title: "Infrastructure Audit", description: "Assessing current bottlenecks and security risks." },
            { title: "Pipeline Automation", description: "Scripting build, test, and deploy workflows." },
            { title: "Cloud Provisioning", description: "Setting up VPCs, Load Balancers, and EC2/ECS." },
            { title: "Monitoring Setup", description: "Configuring Grafana/Prometheus dashboards." }
        ],
        deliverables: ["CI/CD Pipelines", "Terraform Scripts", "Cloud Architecture Diagrams", "Monitoring Dashboards"]
    },
    "realtime": {
        title: "Real-time Systems",
        subtitle: "Live Data Streaming & Communication",
        description: "Engage users instantaneously. We build real-time applications where data updates happen live without page refreshes, perfect for collaborative tools, dashboards, and chat applications.",
        icon: Activity,
        image: "/services/web-engineering.png",
        techStack: ["Socket.io", "WebRTC", "Redis Pub/Sub", "Kafka"],
        features: [
            { title: "Live Notifications", description: "Instant alerts and updates pushed to clients." },
            { title: "Collaborative Editing", description: "Google Docs-style multi-user simultaneous editing." },
            { title: "Live Dashboards", description: "Real-time visualization of changing data streams." },
            { title: "Video/Audio Calls", description: "Peer-to-peer communication using WebRTC." }
        ],
        benefits: ["Instant User Feedback", "Higher Engagement", "Competitive Advantage", "Seamless Collaboration"],
        process: [
            { title: "Event Modeling", description: "Defining websocket events and message payloads." },
            { title: "Server Setup", description: "Configuring WebSocket servers and Redis adapters." },
            { title: "Client Integration", description: "Connecting frontend components to live streams." },
            { title: "Load Testing", description: "Simulating high-concurrency connections." }
        ],
        deliverables: ["Real-time API", "WebSocket Documentation", "Live Dashboard UI", "Load Test Report"]
    },
    "saas": {
        title: "SaaS Development",
        subtitle: "Multi-Tenant Software Platforms",
        description: "Building the next unicorn? We specialize in end-to-end SaaS development, handling everything from subscription management and tenant isolation to admin dashboards and user onboarding.",
        icon: Layers,
        image: "/services/web-engineering.png",
        techStack: ["Stripe Connect", "Auth0/Clerk", "Multi-tenancy", "Next.js"],
        features: [
            { title: "Multi-Tenancy", description: "Securely isolated data for thousands of organizations." },
            { title: "Subscription Billing", description: "Complex usage-based or tiered pricing models integration." },
            { title: "Role-Based Access", description: "Granular permission controls for enterprise users." },
            { title: "Onboarding Flows", description: "Optimized UX to convert free trials to paid users." }
        ],
        benefits: ["Recurring Revenue", "Enterprise Ready", "Global Scalability", "Automated Billing"],
        process: [
            { title: "Business Logic Mapping", description: "Defining tiers, permissions, and tenant structures." },
            { title: "Core Platform Build", description: "Developing the MVP with essential multi-tenancy." },
            { title: "Billing Integration", description: "Connecting Stripe for subscriptions and invoicing." },
            { title: "Beta Launch", description: "Rolling out to early adopters and gathering feedback." }
        ],
        deliverables: ["Full-Stack SaaS Platform", "Admin Dashboard", "Billing Portal", "API Keys & Documentation"]
    },
    "task-scheduling": {
        title: "Task Scheduling",
        subtitle: "Reliable Distributed Job Processing",
        description: "Handle heavy lifting in the background. We implement robust task queues to manage millions of jobs, ensuring your main application remains responsive.",
        icon: Network,
        image: "/services/web-engineering.png",
        techStack: ["Celery", "Redis", "BullMQ", "AWS SQS"],
        features: [
            { title: "Delayed Jobs", description: "Execute tasks at precise future timestamps." },
            { title: "Priority Queues", description: "Ensure critical tasks are processed first." },
            { title: "Retry Logic", description: "Automatic exponential backoff for failed jobs." },
            { title: "Rate Limiting", description: "Control resource consumption across workers." }
        ],
        benefits: ["System Stability", "Fault Tolerance", "Decoupled Architecture", "Peak Load Management"],
        process: [
            { title: "Workload Analysis", description: "Identifying long-running or resource-intensive tasks." },
            { title: "Queue Architecture", description: "Designing the worker pool and broker setup." },
            { title: "Implementation", description: "Refactoring code to offload jobs to the queue." },
            { title: "Monitoring", description: "Dashboard for tracking job success/failure rates." }
        ],
        deliverables: ["Worker Cluster", "Queue Dashboard", "Retry Policy Doc", "Implementation Code"]
    },
    "web": {
        title: "Web Development",
        subtitle: "End-to-End Digital Solutions",
        description: "Our comprehensive web development services cover everything from frontend design to complex backend systems. We build the foundation for your digital success.",
        icon: Globe,
        image: "/services/web-engineering.png",
        techStack: ["Full Stack", "Microservices", "Cloud Native", "PWA"],
        features: [
            { title: "Custom Development", description: "Tailored solutions fitting your exact business needs." },
            { title: "Modern Stacks", description: "Using the latest, most efficient technologies." },
            { title: "Scalable Architecture", description: "Systems designed to grow with your user base." },
            { title: "Maintenance", description: "Ongoing support and updates." }
        ],
        benefits: ["One-Stop Shop", "Consistent Quality", "Agile Delivery", "Technical Excellence"],
        process: [
            { title: "Consultation", description: "Understanding your vision and requirements." },
            { title: "Blueprint", description: "Mapping out the technical roadmap." },
            { title: "Agile Sprints", description: "Iterative development with regular feedback." },
            { title: "Launch", description: "Deploying and handing over the keys." }
        ],
        deliverables: ["Full Product Roadmap", "Deployed Application", "Documentation", "Maintenance Plan"]
    },


    // --- ARTIFICIAL INTELLIGENCE ---
    "chatbots": {
        title: "AI Chatbots",
        subtitle: "Intelligent, Context-Aware Assistants",
        description: "Go beyond simple script-based bots. We build AI agents that understand context, remember history, and can perform actions on behalf of users, drastically reducing support costs.",
        icon: MessageSquare,
        image: "/services/gen-ai.png",
        techStack: ["OpenAI API", "LangChain", "Pinecone", "Vercel SDK"],
        features: [
            { title: "Context Retention", description: "Bots that remember previous parts of the conversation." },
            { title: "Custom Knowledge Base", description: "Trained specifically on your documents and FAQs." },
            { title: "Multi-Channel", description: "Deploy on Web, WhatsApp, Slack, and Discord." },
            { title: "Sentiment Analysis", description: "Detect user frustration and escalate to humans." }
        ],
        benefits: ["24/7 Support", "90% Automation Rate", "Consistent Brand Voice", "Instant Responses"],
        process: [
            { title: "Data Ingestion", description: "Scraping and processing your documents for the knowledge base." },
            { title: "Prompt Engineering", description: "Fine-tuning the system instructions for tone and accuracy." },
            { title: "Integration", description: "Embedding the chat widget into your platform." },
            { title: "Testing & Refinement", description: "User testing to identify and fix edge cases." }
        ],
        deliverables: ["Custom AI Chatbot", "Knowledge Base Embeddings", "Chat Widget / API", "Prompt System Logs"]
    },
    "agents": {
        title: "AI Agents",
        subtitle: "Autonomous Digital Workers",
        description: "The next evolution of automation. AI Agents can plan, reason, and execute complex multi-step workflows autonomously to achieve high-level goals.",
        icon: Bot,
        image: "/services/gen-ai.png",
        techStack: ["AutoGPT", "BabyAGI", "LangGraph", "Python"],
        features: [
            { title: "Goal Planning", description: "Agents break down complex goals into executable steps." },
            { title: "Tool Usage", description: "Ability to browse the web, read files, and call APIs." },
            { title: "Self-Correction", description: "Agents can analyze errors and retry strategies." },
            { title: "Human-in-the-Loop", description: "Checkpoints for human approval on critical actions." }
        ],
        benefits: ["Labor Cost Reduction", "24/7 Productivity", "Error Elimination", "Complex Problem Solving"],
        process: [
            { title: "Workflow Analysis", description: "Identifying manual tasks suitable for autonomous agents." },
            { title: "Agent Design", description: "Defining the agent's tools, goals, and constraints." },
            { title: "Execution Environment", description: "Setting up sandboxed environments for safe execution." },
            { title: "Deployment", description: "Launch and monitoring of agent performance." }
        ],
        deliverables: ["Autonomous Agent Code", "Custom Tool Definitons", "Execution Logs", "Operational Dashboard"]
    },
    "rag": {
        title: "RAG Systems",
        subtitle: "Retrieval-Augmented Generation",
        description: "Make your AI distinct and hallucination-free. RAG systems combine the power of LLMs with your private proprietary data to give accurate, cited, and trustworthy answers.",
        icon: Database,
        image: "/services/gen-ai.png",
        techStack: ["Vector Databases", "Embeddings", "LlamaIndex", "Unstructured.io"],
        features: [
            { title: "Semantic Search", description: "Find documents based on meaning, not just keywords." },
            { title: "Source Citation", description: "AI answers include links to the source documents." },
            { title: "Real-time Indexing", description: "Updates to your knowledge base are reflected instantly." },
            { title: "Privacy First", description: "Data remains within your VPC/Private cloud." }
        ],
        benefits: ["Accurate Answers", "Data Privacy", "Leverage Proprietary Data", "Reduced Hallucinations"],
        process: [
            { title: "Knowledge Mapping", description: "Identifying all data sources (PDFs, Databases, Notion)." },
            { title: "Vectorization", description: "Creating high-dimensional embeddings of your data." },
            { title: "Retrieval Logic", description: "Optimizing the search algorithm for relevance." },
            { title: "UI Integration", description: "Building the search/chat interface." }
        ],
        deliverables: ["Vector Database Instance", "ETL Pipelines", "Search API", "Frontend Integration"]
    },
    "consulting": {
        title: "AI Consulting",
        subtitle: "Strategic AI Implementation",
        description: "Don't get left behind. We help businesses identify high-impact AI use cases, assess feasibility, and build a roadmap for digital transformation centered around artificial intelligence.",
        icon: Zap,
        image: "/services/gen-ai.png",
        techStack: ["Strategy", "Audit", "Feasibility Study", "Roadmap"],
        features: [
            { title: "Use Case Discovery", description: "Identifying where AI brings the higest ROI." },
            { title: "Tech Stack Selection", description: "Choosing the right models and infrastructure." },
            { title: "Ethical AI Audit", description: "Ensuring compliance and bias mitigation." },
            { title: "Team Training", description: "Upskilling your workforce to work with AI." }
        ],
        benefits: ["Clear Roadmap", "Risk Mitigation", "Competitive Edge", "ROI Focused"],
        process: [
            { title: "Discovery Workshops", description: "Deep-dive sessions with your stakeholders." },
            { title: "Opportunity Mapping", description: "Plotting potential AI projects by impact/effort." },
            { title: "Feasibility Analysis", description: "Technical validation of proposed solutions." },
            { title: "Roadmap Delivery", description: "Presenting the final strategic plan." }
        ],
        deliverables: ["Strategic Roadmap PDF", "Technical Specifiction Docs", "Vendor Selection Matrix", "ROI Projections"]
    },
    "llm": {
        title: "LLM Ecosystem",
        subtitle: "Enterprise Large Language Models",
        description: "Harness the power of state-of-the-art models like GPT-4, Claude, and Llama. We build enterprise-grade applications that leverage these thinking engines for content generation, analysis, and reasoning.",
        icon: Bot,
        image: "/services/gen-ai.png",
        techStack: ["OpenAI", "Anthropic", "HuggingFace", "LangSmith"],
        features: [
            { title: "Prompt Optimization", description: "Maximizing model performance and reducing token usage." },
            { title: "Fine-Tuning", description: "Training open-source models on your distinct dataset." },
            { title: "Model Evaluation", description: "Benchmarking different models for your specific use case." },
            { title: "Enterprise Security", description: "Ensuring data doesn't train public models." }
        ],
        benefits: ["Cognitive Automation", "Creative Generation", "Deep Analysis", "Operational Efficiency"],
        process: [
            { title: "Model Selection", description: "Choosing the right balance of cost, speed, and intelligence." },
            { title: "Data Preparation", description: "Cleaning and formatting data for fine-tuning." },
            { title: "Application Wrapper", description: "Building the API and UI around the model." },
            { title: "Guardrails", description: "Implementing safety checks and output validation." }
        ],
        deliverables: ["Fine-Tuned Model Weights", "API Endpoint", "Evaluation Report", "Usage Dashboard"]
    },
    "n8n": {
        title: "Workflow Automation",
        subtitle: "Connect Anything, Automate Everything",
        description: "Eliminate manual data entry and repetitive tasks. We use n8n and modern iPaaS tools to create visual workflows that connect your apps, databases, and AI agents seamlessly.",
        icon: Network,
        image: "/services/gen-ai.png",
        techStack: ["n8n", "Zapier", "Make.com", "Webhooks"],
        features: [
            { title: "Visual Workflows", description: "Easy to understand flowcharts of your business logic." },
            { title: "Custom Nodes", description: "Writing custom code blocks for unique requirements." },
            { title: "Error Handling", description: "Automated alerts and retries when steps fail." },
            { title: "Self-Hosted Options", description: "Keeping automation data on your own servers." }
        ],
        benefits: ["Massive Time Savings", "Reduced Human Error", "Scalable Operations", "Instant Data Sync"],
        process: [
            { title: "Process Mapping", description: "Documenting the current manual workflow steps." },
            { title: "Tool Connection", description: "Authenticating with all necessary APIs and services." },
            { title: "Workflow Construction", description: "Building the logic in n8n/Make." },
            { title: "Stress Testing", description: "Verifying the automation under load and edge cases." }
        ],
        deliverables: ["Automated Workflow", "Documentation", "Maintenance Guide", "Error Logs"]
    },
    "ai": {
        title: "AI Solutions",
        subtitle: "Transforming Business with Intelligence",
        description: "From predictive analytics to generative creativity, our AI solutions cover the entire spectrum of modern artificial intelligence needs.",
        icon: Zap,
        image: "/services/gen-ai.png",
        techStack: ["Generative AI", "Predictive AI", "Computer Vision", "NLP"],
        features: [
            { title: "Custom Solutions", description: "AI built specifically for your niche problems." },
            { title: "Integration", description: "Seamlessly embedding AI into existing software." },
            { title: "Strategy", description: "Guiding your adoption of AI technologies." },
            { title: "Optimization", description: "Continuously improving model performance." }
        ],
        benefits: ["Innovation Leader", "Efficiency Gains", "New Capabilities", "Smart Automation"],
        process: [
            { title: "Ideation", description: "Brainstorming potential AI applications." },
            { title: "Prototyping", description: "Quickly building proof-of-concepts." },
            { title: "Development", description: "Productionizing the best ideas." },
            { title: "Scaling", description: "Rolling out the solution organization-wide." }
        ],
        deliverables: ["AI Strategy", "Production Model", "Integration Code", "Training Documentation"]
    },


    // --- DIGITAL MARKETING ---
    "seo": {
        title: "Advanced SEO",
        subtitle: "Technical & Content Authority",
        description: "Ranking on Google isn't luck; it's engineering. We combine technical SEO audits with high-authority content strategies to drive organic traffic that actually converts.",
        icon: Search,
        image: "/services/growth.png",
        techStack: ["Semrush", "Ahrefs", "Google Search Console", "Schema Markup"],
        features: [
            { title: "Technical Audits", description: "Fixing crawl errors, speed issues, and broken links." },
            { title: "Keyword Strategy", description: "Targeting high-intent keywords with low competition." },
            { title: "Content Clusters", description: "Building topical authority through interlinked content." },
            { title: "Backlink Building", description: "White-hat outreach to gain high-DR backlinks." }
        ],
        benefits: ["Sustainable Traffic", "High ROI", "Brand Authority", "Long-term Results"],
        process: [
            { title: "Site Audit", description: "Comprehensive technical health check." },
            { title: "Keyword Research", description: "Identifying the 'money' keywords." },
            { title: "On-Page Optimization", description: "Optimizing meta tags, headers, and content." },
            { title: "Off-Page Campaign", description: "Acquiring authority backlinks." }
        ],
        deliverables: ["Audit Report", "Keyword Strategy Doc", "Optimized Content", "Monthly Progress Reports"]
    },
    "local-seo": {
        title: "Local SEO",
        subtitle: "Dominate Your Geographic Area",
        description: "For local businesses, the Map Pack is everything. We optimize your GMB profile and build local citations to ensure you're the first choice for customers in your vicinity.",
        icon: Map,
        image: "/services/local-seo.png",
        techStack: ["Google Business Profile", "BrightLocal", "Yext", "Local Schema"],
        features: [
            { title: "GMB Optimization", description: "Optimizing every field of your Google Business Profile." },
            { title: "Citation Building", description: "Consistent NAP across hundreds of directories." },
            { title: "Review Management", description: "Strategies to get more 5-star reviews." },
            { title: "Hyper-local Content", description: "Landing pages targeting specific neighborhoods." }
        ],
        benefits: ["More Foot Traffic", "Top 3 Map Ranking", "Local Trust", "High Intent Calls"],
        process: [
            { title: "Profile Verification", description: "Claiming and verifying your GMB listing." },
            { title: "Citation Audit", description: "Finding and fixing inconsistent NAP data." },
            { title: "Review Campaign", description: "Automating review request emails/SMS." },
            { title: "Monitoring", description: "Tracking local rankings and insights." }
        ],
        deliverables: ["Optimized GMB Profile", "Citation Report", "Review Management System", "Local Ranking Report"]
    },
    "ppc": {
        title: "PPC Media Buying",
        subtitle: "High-ROI Paid Campaigns",
        description: "Stop burning cash. We effectively manage your ad spend across Google, Meta, and LinkedIn to ensure every dollar generates measurable leads and revenue.",
        icon: Globe,
        image: "/services/growth.png",
        techStack: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "GA4"],
        features: [
            { title: "Audience Targeting", description: "Precise demographic and psychographic segmentation." },
            { title: "A/B Testing", description: "Continuous testing of creatives and copy." },
            { title: "Conversion Tracking", description: "Setting up pixels to track actual sales, not just clicks." },
            { title: "Retargeting", description: "Re-engaging visitors who didn't convert the first time." }
        ],
        benefits: ["Instant Traffic", "Scalable Growth", "Measurable ROI", "Precise Targeting"],
        process: [
            { title: "Account Setup", description: "Configuring pixels, events, and ad accounts." },
            { title: "Creative Production", description: "Designing high-converting banners and copy." },
            { title: "Campaign Launch", description: "Setting bids and launching the ads." },
            { title: "Optimization", description: "Daily adjustments to lower CPA." }
        ],
        deliverables: ["Ad Creatives", "Campaign Setup", "Tracking Pixel Implementation", "Weekly Performance Reports"]
    },
    "aeo": {
        title: "Optimization (AEO)",
        subtitle: "Ranking in AI Search",
        description: "The future of search is chat. We optimize your content to be cited by AI engines like ChatGPT, Gemini, and Perplexity, positioning your brand as the authoritative answer.",
        icon: Share2,
        image: "/services/growth.png",
        techStack: ["Structured Data", "Entity Optimization", "Knowledge Graph", "Voice Search"],
        features: [
            { title: "Answer Formatting", description: "Structuring content for direct answers." },
            { title: "Entity Building", description: "Establishing your brand as a recognized entity." },
            { title: "Conversational Content", description: "Writing in a natural, Q&A format." },
            { title: "Fact Optimization", description: "Ensuring facts are clear and citable by AI." }
        ],
        benefits: ["Future Proofing", "Voice Search Foundability", "Authority Status", "Zero-Click Traffic"],
        process: [
            { title: "Entity Analysis", description: "Checking how AI currently perceives your brand." },
            { title: "Schema Deployment", description: "Adding advanced JSON-LD markup." },
            { title: "Content Optimization", description: "Rewriting pillars for conversational relevance." },
            { title: "Knowledge Graph Submission", description: "Submiting data to authoritative sources." }
        ],
        deliverables: ["Entity Report", "Schema Scripts", "Optimized Articles", "AI Visibility Audit"]
    },
    "social": {
        title: "Social & Content",
        subtitle: "Brand Building & Community",
        description: "Content is currency. We create compelling social media strategies and high-quality visuals that build a loyal community around your brand and drive organic engagement.",
        icon: Users,
        image: "/services/branding.png",
        techStack: ["LinkedIn", "Instagram", "Twitter/X", "Canva/Adobe"],
        features: [
            { title: "Content Calendar", description: "Strategic planning of posts for consistency." },
            { title: "Visual Design", description: "Eye-catching graphics and video reels." },
            { title: "Community Mtng", description: "Replying to comments and engaging with followers." },
            { title: "Analytics", description: "Tracking growth, reach, and engagement metrics." }
        ],
        benefits: ["Brand Awareness", "Loyal Community", "Organic Leads", "Thought Leadership"],
        process: [
            { title: "Brand Audit", description: "Analyzing current social presence and tone." },
            { title: "Strategy Creation", description: "Defining pillars and posting schedule." },
            { title: "Content Creation", description: "Producing the raw assets and copy." },
            { title: "Publishing & Engage", description: "Scheduling posts and interacting with the feed." }
        ],
        deliverables: ["Content Calendar", "Social Media Templates", "Monthly Analytics Report", "Brand Guidelines"]
    },
    "outreach": {
        title: "Outreach & Lead Gen",
        subtitle: "Cold Email & Prospecting",
        description: "Fill your pipeline with high-quality leads. We run sophisticated cold email and LinkedIn outreach campaigns to connect you with decision-makers who need your services.",
        icon: Mail,
        image: "/services/growth.png",
        techStack: ["Instantly.ai", "Apollo", "LinkedIn Sales Nav", "Clay"],
        features: [
            { title: "Lead Sourcing", description: "Scraping verified contact info of your ICP." },
            { title: "Email Warming", description: "Ensuring high deliverability and avoiding spam folders." },
            { title: "Copywriting", description: "Personalized scripts that get responses." },
            { title: "Appointment Setting", description: "Booking meetings directly on your calendar." }
        ],
        benefits: ["Consistent Pipeline", "High-Value Deals", "Scalable Sales", "Direct Access to DM"],
        process: [
            { title: "ICP Definition", description: "Clarifying exactly who we are targeting." },
            { title: "List Building", description: "Aggregating thousands of verified prospects." },
            { title: "Campaign Setup", description: "Configuring the sending infrastructure." },
            { title: "Optimization", description: "A/B testing subject lines and value props." }
        ],
        deliverables: ["Verified Lead List", "Email Infrastructure", "Campaign Scripts", "Booked Meetings"]
    },
    "marketing": {
        title: "Digital Marketing",
        subtitle: "Holistic Growth Engines",
        description: "Connect the dots between SEO, PPC, and Content. We build integrated marketing ecosystems that capture demand at every stage of the funnel.",
        icon: Globe,
        image: "/services/growth.png",
        techStack: ["Omnichannel", "Analytics", "Automation", "CRM"],
        features: [
            { title: "Full-Funnel Strategy", description: "Addressing Top, Middle, and Bottom of funnel." },
            { title: "Data Integration", description: "Unified reporting across all channels." },
            { title: "CRO", description: "Optimizing landing pages for higher conversion." },
            { title: "Attribution", description: "Understanding which channel drives revenue." }
        ],
        benefits: ["Maximized ROI", "Unified Messaging", "Data Clarity", "Predictable Growth"],
        process: [
            { title: "Audit & Strategy", description: "Analyzing the entire digital footprint." },
            { title: "Execution", description: "Rolling out campaigns across selected channels." },
            { title: "Optimization", description: "Continuous refinement based on data." },
            { title: "Reporting", description: "Transparent views into what's working." }
        ],
        deliverables: ["Marketing Strategy Deck", "Setup of All Channels", "Live Dashboards", "Quarterly Reviews"]
    }
};
