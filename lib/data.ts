import type { Project, ServicePackage, Testimonial, SkillCard, ProcessStep } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "mlflow-rag",
    title: "MLflow RAG Pipeline",
    description:
      "End-to-end Retrieval-Augmented Generation pipeline with MLflow tracking, vector store integration, and automated retraining workflows.",
    tags: ["MLflow", "LangChain", "FAISS", "Python", "Docker"],
    badge: "40% ↑ retrieval accuracy",
    githubUrl: "https://github.com/Shubhamharanale7/mlflow-rag-pipeline",
    category: "mlops",
    diagramType: "rag",
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection MLOps",
    description:
      "Production-grade fraud detection system with automated model training, drift detection, and real-time inference API serving 10K+ req/s.",
    tags: ["XGBoost", "MLflow", "FastAPI", "Kafka", "AWS"],
    badge: "10K+ req/s throughput",
    githubUrl: "https://github.com/Shubhamharanale7/fraud-detection-mlops",
    category: "mlops",
    diagramType: "mlops",
  },
  {
    id: "e2e-mlops",
    title: "End-to-End MLOps Pipeline",
    description:
      "Complete production MLOps platform: data versioning, experiment tracking, model registry, automated deployment, and monitoring.",
    tags: ["DVC", "MLflow", "Seldon", "Prometheus", "Kubernetes"],
    badge: "Full lifecycle automation",
    githubUrl: "https://github.com/Shubhamharanale7/End---to-End-Mlops-Pipeline-Production",
    category: "mlops",
    diagramType: "mlops",
  },
  {
    id: "devsecops-eks",
    title: "MERN DevSecOps + GitOps EKS",
    description:
      "Enterprise-grade DevSecOps platform on AWS EKS with ArgoCD GitOps, SAST/DAST scanning, OPA policy enforcement, and zero-trust networking.",
    tags: ["EKS", "ArgoCD", "Trivy", "OPA", "Terraform", "GitHub Actions"],
    badge: "99.9% uptime",
    githubUrl: "https://github.com/Shubhamharanale7/MERN-DevSecOps-GitOps-EKS",
    category: "devops",
    diagramType: "k8s",
  },
  {
    id: "django-saas-devops",
    title: "Django SaaS E-Commerce DevOps",
    description:
      "Full-stack Django SaaS deployment on AWS with blue/green deployments, auto-scaling, RDS multi-AZ, CloudFront CDN, and WAF protection.",
    tags: ["Django", "AWS", "RDS", "CloudFront", "GitHub Actions", "Docker"],
    badge: "30% infra cost reduction",
    githubUrl: "https://github.com/Shubhamharanale7/Django-Saas-E-Commerce-Devops-Deployment",
    category: "devops",
    diagramType: "aws",
  },
  {
    id: "observability-stack",
    title: "Prometheus Observability Stack",
    description:
      "Full-stack observability platform with Prometheus, Grafana, Loki, Tempo, and AlertManager — covering metrics, logs, and distributed traces.",
    tags: ["Prometheus", "Grafana", "Loki", "Tempo", "Kubernetes", "Helm"],
    badge: "MTTD reduced 60%",
    githubUrl: "https://github.com/Shubhamharanale7/Prometheus-Observability-Stack",
    category: "devops",
    diagramType: "observability",
  },
  {
    id: "java-3tier",
    title: "Java App AWS 3-Tier Architecture",
    description:
      "Scalable 3-tier Java application on AWS: ALB + EC2 Auto Scaling + RDS Multi-AZ with Terraform IaC and automated CI/CD pipeline.",
    tags: ["Java", "AWS", "Terraform", "ALB", "RDS", "EC2"],
    badge: "Auto-scales to 10K users",
    githubUrl: "https://github.com/Shubhamharanale7/Java-App-AWS-3-Tier-Architecture",
    category: "devops",
    diagramType: "aws",
  },
  {
    id: "customer-support-agent",
    title: "Customer Support AI Agent",
    description:
      "Multi-turn customer support agent built with LangGraph — autonomous reasoning, tool use, memory, and seamless handoff to human agents.",
    tags: ["LangGraph", "OpenAI", "Python", "FastAPI", "Redis"],
    badge: "80% ticket automation",
    githubUrl: "https://github.com/Shubhamharanale7/customer-support-agent-langgraph",
    category: "ai-agents",
    diagramType: "agent",
  },
  {
    id: "cyber-security-agent",
    title: "Cyber Security LLM Agents",
    description:
      "Autonomous security agents powered by LLMs for threat detection, log analysis, vulnerability assessment, and automated incident response.",
    tags: ["LangChain", "GPT-4", "Splunk", "Python", "Docker"],
    badge: "Real-time threat detection",
    githubUrl: "https://github.com/Shubhamharanale7/cyber-security-llm-agents",
    category: "ai-agents",
    diagramType: "agent",
  },
];

export const SKILLS: SkillCard[] = [
  {
    title: "Cloud Architecture & IaC",
    description: "Design and provision scalable AWS/multi-cloud infrastructure using Terraform and CDK.",
    impact: "→ 30% cost reduction",
    tags: ["AWS", "Terraform", "CDK", "OCI", "VPC", "IAM"],
  },
  {
    title: "Kubernetes & Container Orchestration",
    description: "Production K8s clusters on EKS — auto-scaling, service mesh, GitOps deployments.",
    impact: "→ 99.9% uptime",
    tags: ["EKS", "ArgoCD", "Helm", "Istio", "Kustomize"],
  },
  {
    title: "CI/CD Pipeline Engineering",
    description: "End-to-end automated pipelines with security scanning, testing, and zero-downtime deploys.",
    impact: "→ 40% faster releases",
    tags: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD", "Tekton"],
  },
  {
    title: "MLOps & Model Deployment",
    description: "ML lifecycle automation — from experiment tracking to production inference with monitoring.",
    impact: "→ Days → Hours to deploy",
    tags: ["MLflow", "Seldon", "BentoML", "DVC", "Kubeflow"],
  },
  {
    title: "AI / LLM Infrastructure",
    description: "Deploy and scale LLMs, RAG pipelines, and AI agents on production-grade infrastructure.",
    impact: "→ 80% task automation",
    tags: ["LangChain", "LangGraph", "OpenAI", "FAISS", "vLLM"],
  },
  {
    title: "Observability & AIOps",
    description: "Full-stack monitoring with metrics, logs, traces — and AI-driven anomaly detection.",
    impact: "→ MTTD reduced 60%",
    tags: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry"],
  },
];

export const SERVICES: ServicePackage[] = [
  {
    emoji: "🚀",
    title: "Launch",
    subtitle: "MVP DevOps & Cloud Setup",
    bestFor: "Early-stage SaaS / AI startups launching their first product",
    items: [
      "AWS infrastructure setup (EC2 / serverless)",
      "Application Dockerization",
      "CI/CD pipeline (GitHub Actions or similar)",
      "Domain + SSL (HTTPS)",
      "Basic logging & monitoring",
    ],
    outcome: "Go live in days with a production-ready cloud setup",
  },
  {
    emoji: "⚡",
    title: "Scale",
    subtitle: "AI / MLOps Production Setup",
    bestFor: "AI startups deploying LLMs, APIs, or ML models",
    items: [
      "Model/API deployment (LLMs or custom models)",
      "End-to-end MLOps pipeline (build → deploy → monitor)",
      "CI/CD for ML workflows",
      "Monitoring (model performance + infra)",
      "Autoscaling setup",
    ],
    outcome: "Reliable, scalable AI system ready for real users",
    featured: true,
  },
  {
    emoji: "🔥",
    title: "Optimize",
    subtitle: "DevOps, Scaling & AIOps",
    bestFor: "Growing startups facing scaling issues or high cloud costs",
    items: [
      "Kubernetes / advanced scaling setup",
      "Auto-scaling & load balancing",
      "Cost optimization & resource tuning",
      "Observability (metrics, logs, alerts)",
      "Performance & reliability improvements",
    ],
    outcome: "Handle growth smoothly with lower costs and high uptime",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arjun Mehta",
    role: "CTO",
    company: "TechFlow AI",
    text: "Shubham architected our entire ML pipeline from scratch. We went from manual model deployments taking days to automated CI/CD shipping models in 2 hours.",
    result: "Deployment time: days → 2 hours",
    initials: "AM",
  },
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "DataDrive Inc",
    text: "Reduced our AWS bill by 35% without touching performance. The Kubernetes optimization alone paid for his entire engagement 3x over.",
    result: "35% AWS cost reduction",
    initials: "SC",
  },
  {
    name: "Ravi Kumar",
    role: "VP Engineering",
    company: "ScaleStack",
    text: "Set up our observability stack in one week. We went from zero visibility to full metrics, logs, and traces with automated alerting. Night and day difference.",
    result: "Zero to full observability in 1 week",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "CEO",
    company: "FinAI Labs",
    text: "Our fraud detection model serves 10K+ requests per second with 99.9% uptime. The MLOps pipeline Shubham built just works — no babysitting required.",
    result: "10K+ req/s, 99.9% uptime",
    initials: "PS",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Infra",
    company: "CloudNative Co",
    text: "Migrated our monolith to microservices on EKS with zero downtime. The GitOps workflow he implemented has transformed how our team ships code.",
    result: "Zero-downtime migration to EKS",
    initials: "MJ",
  },
  {
    name: "Lisa Thompson",
    role: "CTO",
    company: "InnovateCorp",
    text: "Best DevOps engagement we've had. Clean IaC, everything in Git, properly documented. Six months later and the systems still run themselves.",
    result: "Fully self-managing infra",
    initials: "LT",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Discovery", desc: "Audit existing stack, define requirements, and map the architecture" },
  { step: "02", title: "Architecture", desc: "Design scalable, cost-optimized system with reliability built-in" },
  { step: "03", title: "Build", desc: "IaC-first setup — everything version-controlled and reproducible" },
  { step: "04", title: "CI/CD", desc: "Automated pipelines with testing, security scanning, and rollbacks" },
  { step: "05", title: "Deploy", desc: "Zero-downtime production deployment with full observability" },
  { step: "06", title: "Scale", desc: "Continuous optimization, monitoring, and performance tuning" },
];

export const TRUST_ITEMS = [
  "AWS Certified SAA",
  "Oracle OCI DevOps",
  "Kubernetes",
  "Terraform",
  "MLOps",
  "LangChain",
  "ArgoCD",
  "Prometheus",
  "GitHub Actions",
  "AI Agents",
  "Multi-Cloud",
  "GitOps",
];

export const PROOF_ITEMS = [
  { label:"AWS",        icon:"☁️"  },
  { label:"Kubernetes", icon:"⚙️"  },
  { label:"Terraform",  icon:"🏗️" },
  { label:"MLflow",     icon:"🤖"  },
  { label:"LangGraph",  icon:"🧠"  },
  { label:"ArgoCD",     icon:"🔁"  },
  { label:"Prometheus", icon:"📡"  },
  { label:"Docker",     icon:"📦"  },
];
